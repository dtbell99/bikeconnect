import express, { type Request, type Response } from "express";
import { getBike, getBikeList, saveBike } from "#service/bikeservice.ts";
import { auth } from "#middleware/authorizer.ts";
import type { Bike } from "#model/bikeconnect.ts";

class BikeRouter {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.setupMiddleware();
    this.registerRoutes();
  }

  private setupMiddleware() {
    this.router.use(auth);
  }

  private registerRoutes() {
    this.router.get("/list", async (req: Request, res: Response) => {
      const bikeList = await getBikeList(res.locals.owner);
      res.json(bikeList);
    });

    this.router.get("/:id", async (req: Request, res: Response) => {
      const idStr = req.params.id;
      if (!idStr) {
        res.status(422);
        return;
      }
      const bikeId = Number(idStr);
      if (bikeId <= 0) {
        res.status(404);
        return;
      }
      const bike = await getBike(bikeId, res.locals.owner);
      res.json(bike);
    });

    this.router.post("/save", async (req: Request, res: Response) => {
      const bike = req.body as Bike;
      if (!bike.brand || !bike.model || !bike.frameMaterial) {
        res.status(422).json({ sucess: false, error: "Missing data" });
        return;
      }

      const saved = await saveBike(bike, res.locals.owner);
      if (saved) {
        res.json({ success: true, id: bike.id });
      } else {
        res.status(500).json({ success: false });
      }
    });
  }
}

export default new BikeRouter().router;
