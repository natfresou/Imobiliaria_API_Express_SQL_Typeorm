import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import {
  createRealEstateController,
  readRealEstateController,
} from "../controllers";
import { realEstateCreateSchema } from "../schemas";
import verifyToken from "../middlewares/verifyToken.middleware";
import { verifyUserPermission } from "../middlewares/verifyUserPermission.middleware";

const realEstateRouter = Router();

realEstateRouter.post(
  "",
  verifyToken,
  verifyUserPermission,
  validateBody(realEstateCreateSchema),
  createRealEstateController
);

realEstateRouter.get("", readRealEstateController);

export default realEstateRouter;
