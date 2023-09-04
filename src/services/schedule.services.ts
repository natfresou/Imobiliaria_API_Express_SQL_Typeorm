import { addressRepo, categoryRepo, realEstateRepo, scheduleRepo} from "../repositories";
import { CategoryReturn, RealEstateCreate, RealEstateReturn, RealEstateSchedule, RealEstatesRead, ScheduleCreate } from "../interfaces";
import { AddressReturn } from "../interfaces/address.interfaces";
import { AppError } from "../errors";
import { Schedule } from "../entities";


const createScheduleService = async (data:ScheduleCreate ): Promise<any> => {
  const realEstate:RealEstateSchedule|null = await realEstateRepo.findOneBy({id:Number(data.realEstateId)})
  if(!realEstate){ throw new AppError("RealEstate not found")}
  // const foundSchedule:Schedule|null = await scheduleRepo.findOneBy({date:date.date,hour:date.hour, realEstateId:Number(date.realEstateId)})
  // if(foundSchedule){ throw new Error("Schedule to this real estate at this date and time alredy exist")} 
    const newSchedule: any = await scheduleRepo.save(data)
    return  newSchedule
 
};

// const readRealEstateService= async (): Promise<RealEstateReturn[]> => {
//   const realEstates = await scheduleRepo.find({
//     relations: {
//       realEstate:true,
//       user:true,
//       },
//     },
//   );

//   return realEstates
// };

export {
  createScheduleService
};
