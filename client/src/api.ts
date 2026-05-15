const BASE = "/api";

export const createSession = async (displayName: string) => {
  const res = await fetch(`${BASE}/session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ displayName }),
  });
  if (!res.ok) throw new Error("Failed to create session");
  return res.json() as Promise<{ sessionId: string; displayName: string }>;
};

export const createBoard = async (name: string, password?: string) => {
  const res = await fetch(`${BASE}/boards`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password: password || undefined }),
  });
  if (!res.ok) throw new Error("Failed to create board");
  return res.json() as Promise<{
    boardId: string;
    name: string;
    hasPassword: boolean;
  }>;
};

export const getBoard = async (boardId: string) => {
  const res = await fetch(`${BASE}/boards/${boardId}`);
  if (!res.ok) throw new Error("Board not found");
  return res.json() as Promise<{
    boardId: string;
    name: string;
    hasPassword: boolean;
  }>;
};

export const verifyBoard = async (boardId: string, password: string) => {
  const res = await fetch(`${BASE}/boards/${boardId}/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
  if (!res.ok) throw new Error("Incorrect password");
  return res.json() as Promise<{ success: boolean }>;
};

export const renameBoard = async (boardId: string, name: string) => {
  const res = await fetch(`${BASE}/boards/${boardId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error("Failed to rename board");
  return res.json() as Promise<{ boardId: string; name: string }>;
};
