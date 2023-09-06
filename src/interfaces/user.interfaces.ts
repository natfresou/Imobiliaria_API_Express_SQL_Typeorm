import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  userCreateSchema,
  userReturnSchema,
  userUpdateSchema,
} from "../schemas";

type UserCreate = z.infer<typeof userCreateSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;
type UsersRead = Array<UserReturn>;
type UserUpdate = DeepPartial<typeof userUpdateSchema>;

export { UserCreate, UsersRead, UserUpdate, UserReturn };
