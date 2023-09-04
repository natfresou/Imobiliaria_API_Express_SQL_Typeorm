import { hash } from "bcryptjs";
import { User } from "../entities";
import { UserCreate, UserReturn, UserUpdate, UsersRead } from "../interfaces/user.interfaces";
import { userRepo } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas";
import { AppError } from "../errors";


const createUserService = async (payload: UserCreate): Promise<UserReturn> => {
    const user: User = await userRepo.save(payload);
    const userNoPassword = userReturnSchema.parse(user);
    return userNoPassword ;

};


const readUserService = async (): Promise<UsersRead> => {
  return userReadSchema.parse(await userRepo.find())
};

const updateUserService = async (
  user: User,
  payload:UserUpdate
): Promise<UserReturn > => {
  const upUser=await userRepo.save({ ...user, ...payload });
  return userReturnSchema.parse(upUser)
};

const destroyUserService = async (user: User): Promise<void> => {
  await userRepo.softRemove(user);
};


export {
  createUserService, readUserService,updateUserService,destroyUserService
};
