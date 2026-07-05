import "dotenv/config";

import express, { type Request, type Response } from "express";
import bodyParser from "body-parser";

import bikeRouter from "#routes/bike.ts";
import authRouter from "#routes/auth.ts";

class Server {
  private app: express.Express;
  private port: number;

  constructor() {
    this.app = express();
    this.port = 3001;
    this.setupMiddleware();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.app.get("/api/health-check", (req: Request, res: Response) => {
      res.send("If you see this you should be out riding your bike!");
    });
    this.app.use("/api/bike", bikeRouter);
    this.app.use("/api/auth", authRouter);
  }

  private setupMiddleware() {
    express.json();
    this.app.use(bodyParser.json());
    this.app.use(express.static("public"));
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log("Server listening on port ", this.port);
    });
  }
}

const server = new Server();
server.listen();
