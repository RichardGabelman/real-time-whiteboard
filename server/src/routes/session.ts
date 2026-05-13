import { Router } from "express";
import { prisma } from "../db";

const router = Router();

router.post("/", async (req, res) => {
  const { displayName } = req.body;

  if (
    !displayName ||
    typeof displayName !== "string" ||
    displayName.trim() === ""
  ) {
    res.status(400).json({ error: "displayName is required" });
    return;
  }

  const session = await prisma.session.create({
    data: { displayName: displayName.trim() },
  });

  res.json({ sessionId: session.id, displayName: session.displayName });
});

export default router;
