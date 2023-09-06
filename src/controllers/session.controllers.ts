import { Request, Response } from "express";
import { createSessionService } from "../services";
import { SessionReturn } from "../interfaces/session.interfaces";

const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const login: SessionReturn = await createSessionService(req.body);
  return res.status(200).json(login);
};
export { loginUserController };
