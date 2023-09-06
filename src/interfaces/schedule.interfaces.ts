import { z } from "zod";
import { scheduleCreate, scheduleRealEstateReturn,scheduleUserRealEstateReturn } from "../schemas";

type ScheduleCreate = z.infer<typeof scheduleCreate>;

type ScheduleRealEstate = z.infer<typeof scheduleRealEstateReturn>;
type ScheduleUserRealEstateReturn = z.infer<typeof scheduleUserRealEstateReturn>;

export { ScheduleCreate, ScheduleRealEstate,ScheduleUserRealEstateReturn };
