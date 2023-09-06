import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { AppError } from "../errors";
import { userRepo } from "../repositories";

export const uniqueEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;

  if (!email) {
    return next();
  }

  const userEmail: User | null = await userRepo.findOneBy({
    email: req.body.email,
  });

  if (userEmail) {
    throw new AppError("Email already exists", 409);
  }
  return next();
};
