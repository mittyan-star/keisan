import type { Request, Response } from "express";

export function generateRoute(req: Request, res: Response) {
  res.json({ message: "generate route placeholder" });
}
