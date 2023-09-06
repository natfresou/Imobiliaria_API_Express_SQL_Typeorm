import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { sessionCreate } from "../schemas";
import { loginUserController } from "../controllers";

const loginRouter = Router();

loginRouter.post("", validateBody(sessionCreate), loginUserController);

export default loginRouter;
