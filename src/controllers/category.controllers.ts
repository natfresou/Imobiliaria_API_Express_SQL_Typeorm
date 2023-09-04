import { Request, Response } from "express";
import { createCategoryService, readCategoryService, readRealEstateFromCategoryService} from "../services";
import { CategoryReturn, CategorysRead } from "../interfaces";

const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
  const category: CategoryReturn = await createCategoryService(req.body);
  return res.status(201).json(category);
};

const readCategoryController = async (req: Request, res: Response): Promise<Response> => {
  const categorys: CategorysRead= await readCategoryService();
  return res.status(200).json(categorys);
};

const readRealEstateFromCategoryController = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.id);
  const imovel = await readRealEstateFromCategoryService(id);
  return res.status(200).json(imovel);
};


export { createCategoryController,readCategoryController,readRealEstateFromCategoryController}

