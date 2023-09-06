import { z } from "zod";
import { realEstateReturnSchema } from "./realEstate.schemas";

const categorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
});
const categoryCreateSchema = categorySchema.omit({
  id: true,
});
const categoryReadSchema = categorySchema.array();

const categoryHousesReadSchema = realEstateReturnSchema
  .omit({ category: true })
  .array();

const categoryReturnRealEstateSchema = categorySchema.extend({
  realEstate: realEstateReturnSchema.array(),
});

export {
  categorySchema,
  categoryCreateSchema,
  categoryReadSchema,
  categoryHousesReadSchema,
  categoryReturnRealEstateSchema,
};
