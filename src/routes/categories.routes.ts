// src/routes.ts
import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { uniqueName } from "../middlewares/uniqueName.middleware";
import {
  createCategoryController,
  readCategoryController,
  readRealEstateFromCategoryController,
} from "../controllers";
import {
  categoryCreateSchema
} from "../schemas";
import verifyToken from "../middlewares/verifyToken.middleware";
import { verifyUserPermission } from "../middlewares/verifyUserPermission.middleware";

const categoriesRouter = Router();

categoriesRouter.post(
  "",
  verifyToken,
  verifyUserPermission,
  validateBody(categoryCreateSchema),
  createCategoryController
);

categoriesRouter.get("", readCategoryController);
categoriesRouter.get("/:id/realEstate", readRealEstateFromCategoryController);

export default categoriesRouter;
