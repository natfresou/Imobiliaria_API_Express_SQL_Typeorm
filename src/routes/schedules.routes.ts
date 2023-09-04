// src/routes.ts
import { Router } from "express";

import {
  createScheduleController,
} from "../controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import { scheduleCreate } from "../schemas";
import verifyToken from "../middlewares/verifyToken.middleware";
import { verifyUserPermission } from "../middlewares/verifyUserPermission.middleware";


const schedulesRouter = Router();

schedulesRouter.post(
  "", verifyToken, verifyUserPermission,
  validateBody(scheduleCreate),
createScheduleController
);


export default schedulesRouter 