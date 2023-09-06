import { z } from "zod";
import { userSchema } from "./user.schemas";
import { realEstateSchema } from "./realEstate.schemas";

const scheduleCreate = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().int().positive(),
});
const scheduleReturn = z.object({
  message: z.string(),
});

const scheduleUserRealEstateReturn = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  user: userSchema,
});

const scheduleRealEstateReturn = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().or(z.string()).default(0),
  size: z.number().int().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  schedules: scheduleUserRealEstateReturn.array(),
});

export { scheduleCreate, scheduleReturn, scheduleRealEstateReturn,scheduleUserRealEstateReturn  };
