import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { AppError } from "../errors";
import { userRepo } from "../repositories";

export const uniqueName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.body;

  if (!name) {
    return next();
  }

  const userName: User | null = await userRepo.findOneBy({
    name: req.body.name,
  });

  if (userName) {
    throw new AppError("User already exists.", 409);
  }
  return next();
};
