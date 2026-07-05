import { getUser } from "#database/userdb.ts";
import type { User } from "#model/bikeconnect.ts";
import express, { type Request, type Response } from "express";

class AuthRouter {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.registerRoutes();
  }

  private registerRoutes() {
    this.router.post("/setup", async (req: Request, res: Response) => {
      const userDetails: User = req.body;
      if (!userDetails) {
        res.status(422).json({ err: "Missing User Details" });
        return;
      }

      const user = await getUser(userDetails.email);

      if (user) {
        res.status(401).json({ message: "User Already Registered" });
        return;
      }

      res.status(200).json({ message: "User Created" });
    });
  }
}

export default new AuthRouter().router;
