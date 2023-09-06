import {
  userSchema,
  userCreateSchema,
  userUpdateSchema,
  userReturnSchema,
  userReadSchema,
} from "./user.schemas";
import { sessionCreate } from "./session.schemas";
import {
  categorySchema,
  categoryCreateSchema,
  categoryReadSchema,
  categoryHousesReadSchema,
  categoryReturnRealEstateSchema,
} from "./category.schemas";
import { addressSchema, addressCreateSchema } from "./address.schemas";
import {
  realEstateSchema,
  realEstateCreateSchema,
  realEstatesReadSchema,
  realEstateReturnSchema,
  realEstateScheduleSchema,
} from "./realEstate.schemas";
import {
  scheduleCreate,
  scheduleReturn,
  scheduleRealEstateReturn,
  scheduleUserRealEstateReturn
} from "./schedule.schemas";

export {
  userSchema,
  userCreateSchema,
  userUpdateSchema,
  userReturnSchema,
  sessionCreate,
  userReadSchema,
  categorySchema,
  categoryCreateSchema,
  categoryReadSchema,
  categoryHousesReadSchema,
  categoryReturnRealEstateSchema,
  addressSchema,
  addressCreateSchema,
  realEstateSchema,
  realEstateCreateSchema,
  realEstatesReadSchema,
  realEstateReturnSchema,
  realEstateScheduleSchema,
  scheduleCreate,
  scheduleReturn,
  scheduleRealEstateReturn,
  scheduleUserRealEstateReturn
};
