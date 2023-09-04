import { z } from "zod";
import { addressCreateSchema, addressSchema } from "./address.schemas";
import { categorySchema } from "./category.schemas";


const realEstateSchema = z.object({
  id: z.number().positive(),
  value:z.number().or(z.string()).default(0),
  size: z.number().int().positive(),
  sold:z.boolean().default(false),
  address:addressCreateSchema,
  categoryId:z.number().int(),
  createdAt:z.string().or(z.date()),
  updatedAt:z.string().or(z.date())
});

const realEstateCreateSchema = realEstateSchema.omit({
  id: true,
  sold:true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const realEstateReturnSchema = z.object({
  value:z.number().or(z.string()).default(0),
  size: z.number().int(),
  address:addressSchema,
  category:categorySchema,
  id: z.number().positive(),
  sold:z.boolean().default(false),
  createdAt:z.string().or(z.date()),
  updatedAt:z.string().or(z.date())
});


const realEstateScheduleSchema = realEstateReturnSchema.omit({
  address: true,
  category:true,
});

const realEstatesReadSchema = realEstateReturnSchema.array();

export {realEstateSchema,realEstateCreateSchema,realEstatesReadSchema,realEstateReturnSchema,realEstateScheduleSchema};
