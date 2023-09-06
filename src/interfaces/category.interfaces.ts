import { z } from "zod";
import {
  categoryCreateSchema,
  categorySchema,
  categoryHousesReadSchema,
  categoryReturnRealEstateSchema,
} from "../schemas";

type CategoryCreate = z.infer<typeof categoryCreateSchema>;
type CategoryReturn = z.infer<typeof categorySchema>;
type CategorysRead = Array<CategoryReturn>;
type CategoryHousesRead = z.infer<typeof categoryHousesReadSchema>;
type CategoryReturnRealEstate = z.infer<typeof categoryReturnRealEstateSchema>;

export {
  CategoryCreate,
  CategoryReturn,
  CategorysRead,
  CategoryHousesRead,
  CategoryReturnRealEstate,
};
