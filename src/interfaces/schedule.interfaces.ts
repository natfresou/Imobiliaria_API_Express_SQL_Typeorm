import { z } from "zod";
import { scheduleCreate } from "../schemas";


type ScheduleCreate = z.infer<typeof scheduleCreate>;



export   {ScheduleCreate};
