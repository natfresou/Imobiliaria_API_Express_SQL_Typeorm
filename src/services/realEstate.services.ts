import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";

import {
  CategoryReturn,
  RealEstateCreate,
  RealEstateReturn,
} from "../interfaces";
import { AddressReturn } from "../interfaces/address.interfaces";
import { AppError } from "../errors";

const createRealEstateService = async (
  data: RealEstateCreate
): Promise<RealEstateReturn> => {

  const{address, categoryId, ...body} = data

  const category: CategoryReturn | null = await categoryRepo.findOneBy({
    id: Number(categoryId),
  });
  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const foundAddress: AddressReturn | null = await addressRepo.findOneBy(address);

  if (foundAddress) {
    throw new AppError("Address already exists", 409);
  }
  const newAddress: AddressReturn = await addressRepo.save(address);

  const realEstate: RealEstateReturn = await realEstateRepo.save({
    ...body,
    category: category,
    address: newAddress,
  });

  return realEstate;
};

const readRealEstateService = async (): Promise<RealEstateReturn[]> => {
  const realEstates = await realEstateRepo.find({
    relations: {
      address: true,
      category: true,
    },
  });

  return realEstates;
};

export { createRealEstateService, readRealEstateService };
