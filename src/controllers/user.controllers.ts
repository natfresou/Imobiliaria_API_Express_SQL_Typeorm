import { Request, Response } from "express";
import {
  createUserService,
  destroyUserService,
  readUserService,
  updateUserService,
} from "../services";
import { UserReturn, UsersRead } from "../interfaces";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: UserReturn = await createUserService(req.body);
  return res.status(201).json(user);
};

const readUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: UsersRead = await readUserService();
  return res.status(200).json(users);
};

const destroyUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await destroyUserService(res.locals.foundUser);
  return res.status(204).json();
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { foundUser } = res.locals;
  const { body } = req;
  const user: UserReturn = await updateUserService(foundUser, body);
  return res.status(200).json(user);
};

export {
  createUserController,
  readUserController,
  destroyUserController,
  updateUserController,
};
