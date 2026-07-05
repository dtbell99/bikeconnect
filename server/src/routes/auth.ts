import { getUser } from "#database/userdb.ts";
import express, { type Request, type Response } from "express";

class AuthRouter {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.registerRoutes();
  }

  private registerRoutes() {
    this.router.post("/", async (req: Request, res: Response) => {
      const email = req.body.email;
      if (!email) {
        res.status(422).json({ err: "Missing Email" });
        return;
      }

      const user = await getUser(email);

      if (!user) {
        console.log("User not found in database: " + email);
        res.status(404).json({ message: "No User Found" });
        return;
      }

      res.status(200).json({ message: "Check Email" });
    });
  }
}

export default new AuthRouter().router;
