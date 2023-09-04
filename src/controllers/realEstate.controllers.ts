import { Request, Response } from "express";
import { RealEstateReturn, RealEstatesRead} from "../interfaces";
import { createRealEstateService, readRealEstateService } from "../services";


const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {
  const realState:RealEstateReturn = await createRealEstateService(req.body);
  return res.status(201).json(realState);
};

const readRealEstateController = async (req: Request, res: Response): Promise<Response> => {
  const realEstates: RealEstatesRead= await readRealEstateService();
  return res.status(200).json(realEstates);
};

export { createRealEstateController,readRealEstateController};