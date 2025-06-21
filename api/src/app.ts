import "dotenv/config";

import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import bikeRouter from "./routes/bikeroute";
express.json();

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use("/api/bike", bikeRouter);

app.get("/api/health-check", (req: Request, res: Response) => {
  res.send("If you see this you should be out riding your bike!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
