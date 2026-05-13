import { Router } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../db";

const router = Router();

router.post("/", async (req, res) => {
  const { name, password } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    res.status(400).json({ error: "name is required" });
    return;
  }

  const passwordHash = password ? await bcrypt.hash(password, 10) : null;

  const board = await prisma.board.create({
    data: {
      name: name.trim(),
      passwordHash,
    },
  });

  res.json({
    boardId: board.id,
    name: board.name,
    hasPassword: !!board.passwordHash,
  });
});

router.post("/:boardId/verify", async (req, res) => {
  const { boardId } = req.params;
  const { password } = req.body;

  const board = await prisma.board.findUnique({ where: { id: boardId } });

  if (!board) {
    res.status(404).json({ error: "Board not found" });
    return;
  }

  if (!board.passwordHash) {
    res.json({ success: true });
    return;
  }

  if (!password) {
    res.status(401).json({ error: "Password required", hasPassword: true });
    return;
  }

  const match = await bcrypt.compare(password, board.passwordHash);
  if (!match) {
    res.status(401).json({ error: "Incorrect password" });
    return;
  }

  res.json({ success: true });
});

router.get("/:boardId", async (req, res) => {
  const { boardId } = req.params;

  const board = await prisma.board.findUnique({ where: { id: boardId } });

  if (!board) {
    res.status(404).json({ error: "Board not found" });
    return;
  }

  res.json({
    boardId: board.id,
    name: board.name,
    hasPassword: !!board.passwordHash,
  });
});

router.patch("/:boardId", async (req, res) => {
  const { boardId } = req.params;
  const { name } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    res.status(400).json({ error: "name is required" });
    return;
  }

  const board = await prisma.board.update({
    where: { id: boardId },
    data: { name: name.trim() },
  });

  res.json({ boardId: board.id, name: board.name });
});

export default router;
