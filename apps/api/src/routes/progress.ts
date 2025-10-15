import type { Request, Response } from "express";

export function progressRoute(req: Request, res: Response) {
  res.json({ message: "progress route placeholder" });
}
