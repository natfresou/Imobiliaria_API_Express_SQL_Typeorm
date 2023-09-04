import { z } from "zod";


const scheduleCreate = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId:z.number().int().positive()

});
const scheduleReturn =z.object({
  message: z.string(),
});
// const categoryReadSchema = categorySchema.array();

// const categoryHousesReadSchema = realEstateReturnSchema.omit({category: true}).array();

export {scheduleCreate,scheduleReturn};

