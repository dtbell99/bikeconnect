import express, { Request, Response } from "express";
import { getBikeList, saveBike } from "../service/bikeservice";
import { auth } from "../middleware/authorizer";

const router = express.Router();

router.use(auth);

router.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

router.post("/save", async (req: Request, res: Response) => {
  const bike = req.body;
  const saved = await saveBike(bike, res.locals.owner);
  if (saved) {
    res.json({ success: true, id: bike.id });
  } else {
    res.status(500).json({ success: false });
  }
});

router.get("/list", async (req: Request, res: Response) => {
  const bikeList = await getBikeList(res.locals.owner);
  res.json(bikeList);
});

router.post("/save", (req: Request, res: Response) => {
  res.json({ success: false });
});

export default router;
