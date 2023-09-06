import { NextFunction, Request, Response } from "express";
import {  User } from "../entities";
import { AppError } from "../errors";
import { userRepo } from "../repositories";

export const verifyIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const {id} = req.params

  const foundUser: User | null = await userRepo.findOneBy({
    id: Number(req.params.id),
  });

  if (!foundUser) throw new AppError("User not found", 404);

  res.locals = { ...res.locals, foundUser };

  return next();
};
