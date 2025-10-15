import type { Request, Response } from "express";

export function sessionRoute(req: Request, res: Response) {
  res.json({ message: "session route placeholder" });
}
