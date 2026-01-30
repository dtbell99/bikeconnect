import { Request, Response, NextFunction } from "express";

const env = process.env.ENVIRONMENT;

export function auth(req: Request, res: Response, next: NextFunction) {
  if (env === "local") {
    res.locals.owner = process.env.OWNER;
    next();
    return;
  }
  res.status(401).send("Unauthorized");
}
