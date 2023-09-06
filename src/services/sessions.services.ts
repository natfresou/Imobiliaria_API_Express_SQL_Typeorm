import { sign } from "jsonwebtoken";
import { AppError } from "../errors";
import { compare } from "bcryptjs";
import { SessionCreate, SessionReturn } from "../interfaces/session.interfaces";
import { userRepo } from "../repositories";
import { User } from "../entities";

const createSessionService = async (
  payload: SessionCreate
): Promise<SessionReturn> => {
  const userFaund: User | null = await userRepo.findOneBy({
    email: payload.email,
  });

  if (!userFaund) {
    throw new AppError("Invalid credentials", 401);
  }

  const samePassword: boolean = await compare(
    payload.password,
    userFaund.password
  );
  if (!samePassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign(
    { email: userFaund.email, admin: userFaund.admin },
    process.env.SECRET_KEY!,
    { subject: userFaund.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};

export { createSessionService };
