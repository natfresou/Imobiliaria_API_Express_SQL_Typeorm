import { Category } from "../entities";
import { categoryRepo } from "../repositories";
import {
  CategoryCreate,
  CategoryReturn,
  CategoryReturnRealEstate,
  CategorysRead,
} from "../interfaces";
import { categoryReadSchema } from "../schemas";
import { AppError } from "../errors";

const createCategoryService = async (
  payload: CategoryCreate
): Promise<CategoryReturn> => {
  const categoryName: CategoryReturn | null = await categoryRepo.findOneBy({
    name: payload.name,
  });

  if (categoryName) {
    throw new AppError("Category already exists", 409);
  } else {
    const category: Category = await categoryRepo.save(payload);

    return category;
  }
};

const readCategoryService = async (): Promise<CategorysRead> => {
  return categoryReadSchema.parse(await categoryRepo.find());
};

const readRealEstateFromCategoryService = async (
  categoryId: number
): Promise<CategoryReturnRealEstate> => {
  const realEstates = await categoryRepo.findOne({
    where: { id: categoryId },
    relations: {
      realEstate: true,
    },
  });
  if (!realEstates) {
    throw new AppError("Category not found", 404);
  }

  return realEstates;
};

export {
  createCategoryService,
  readCategoryService,
  readRealEstateFromCategoryService,
};
