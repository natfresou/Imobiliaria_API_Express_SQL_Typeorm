import { Router } from "express";
import {
  createScheduleController,
  readScheduleRealEstateController,
} from "../controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import { scheduleCreate } from "../schemas";
import verifyToken from "../middlewares/verifyToken.middleware";

const schedulesRouter = Router();

schedulesRouter.post(
  "",
  verifyToken,
  validateBody(scheduleCreate),
  createScheduleController
);

schedulesRouter.get(
  "/realEstate/:id",
  verifyToken,
  readScheduleRealEstateController
);

export default schedulesRouter;
