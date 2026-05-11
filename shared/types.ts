export interface DrawEvent {
  boardId: string;
  socketId: string;
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  color: string;
  width: number;
}

export interface CursorEvent {
  boardId: string;
  socketId: string;
  userId: string;
  x: number;
  y: number;
}

export interface StickyNote {
  id: string;
  boardId: string;
  x: number;
  y: number;
  content: string;
  color: string;
}

export type SocketEvents = {
  draw: DrawEvent;
  "cursor-move": CursorEvent;
  "sticky-note-update": StickyNote;
};
