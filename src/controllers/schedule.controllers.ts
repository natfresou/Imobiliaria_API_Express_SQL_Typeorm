import { Request, Response } from "express";
import {
  createScheduleService,
  readScheduleRealEstateService,
} from "../services";
import { ScheduleRealEstate } from "../interfaces";

const createScheduleController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { sub } = res.locals.decoded;
  await createScheduleService(req.body, sub);
  return res.status(201).json({ message: "Schedule created" });
};

const readScheduleRealEstateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { admin } = res.locals.decoded;
  const realEstates: ScheduleRealEstate | void =
    await readScheduleRealEstateService(Number(req.params.id),admin);
  return res.status(200).json(realEstates);
};

export { createScheduleController, readScheduleRealEstateController };
