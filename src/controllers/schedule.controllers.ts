import { Request, Response } from "express";
import { RealEstateReturn, RealEstatesRead} from "../interfaces";
import { createRealEstateService, createScheduleService, readRealEstateService } from "../services";


const createScheduleController = async (req: Request, res: Response): Promise<Response> => {
 await createScheduleService(req.body);
  return res.status(201).json({"message": "Schedule created"});
};
// onst readRealEstateController = async (req: Request, res: Response): Promise<Response> => {
//   const realEstates: RealEstatesRead= await readRealEstateService();
//   return res.status(200).json(realEstates);
// };


export { createScheduleController};