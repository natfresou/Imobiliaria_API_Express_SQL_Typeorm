import { z } from "zod";
import { realEstateSchema, realEstateCreateSchema, realEstatesReadSchema, realEstateReturnSchema, realEstateScheduleSchema } from "../schemas";



type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
type RealEstateReturn =z.infer<typeof realEstateReturnSchema>
type RealEstatesRead = z.infer<typeof  realEstatesReadSchema>
type RealEstateSchedule = z.infer <typeof realEstateScheduleSchema>
  



export   {RealEstateCreate,RealEstateReturn,RealEstatesRead,RealEstateSchedule };
