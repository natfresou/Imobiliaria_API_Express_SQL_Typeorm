// src/routes.ts
import { Router } from "express";

import { validateBody } from "../middlewares/validateBody.middleware";
import {
  createUserController,
  destroyUserController,
  readUserController,
  updateUserController,
} from "../controllers";
import { userCreateSchema, userUpdateSchema } from "../schemas";
import verifyToken from "../middlewares/verifyToken.middleware";
import { verifyUserPermission } from "../middlewares/verifyUserPermission.middleware";
import { verifyIdExists } from "../middlewares/verifyIdExist.middleware";
import { uniqueEmail } from "../middlewares/uniqueEmail.middleware";

const usersRouter = Router();

usersRouter.post(
  "",
  validateBody(userCreateSchema),
  uniqueEmail,
  createUserController
);

usersRouter.get("", verifyToken, verifyUserPermission, readUserController);
usersRouter.patch(
  "/:id",
  verifyToken,
  verifyIdExists,
  verifyUserPermission,
  validateBody(userUpdateSchema),
  uniqueEmail,
  updateUserController
);
usersRouter.delete(
  "/:id",
  verifyToken,
  verifyIdExists,
  verifyUserPermission,
  destroyUserController
);

export default usersRouter;
