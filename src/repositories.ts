import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import { User, Category, Schedule, RealEstate, Address } from "./entities";

export const userRepo: Repository<User> = AppDataSource.getRepository(User);

export const categoryRepo: Repository<Category> =
  AppDataSource.getRepository(Category);

export const scheduleRepo: Repository<Schedule> =
  AppDataSource.getRepository(Schedule);

export const realEstateRepo: Repository<RealEstate> =
  AppDataSource.getRepository(RealEstate);

export const addressRepo: Repository<Address> =
  AppDataSource.getRepository(Address);
