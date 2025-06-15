import "dotenv/config";

import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import bikeRouter from "./routes/bike";
express.json();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/bike", bikeRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
