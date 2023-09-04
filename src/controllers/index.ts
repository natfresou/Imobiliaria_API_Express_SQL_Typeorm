import {
  createUserController,
  readUserController,
  destroyUserController,
  updateUserController,
} from "./user.controllers";
import { loginUserController } from "./session.controllers";
import {
  createCategoryController,
  readCategoryController,
  readRealEstateFromCategoryController
} from "./category.controllers";
import {
  createRealEstateController,
  readRealEstateController,
} from "./realEstate.controllers";
import {createScheduleController} from "./schedule.controllers"

export {
  createUserController,
  loginUserController,
  readUserController,
  destroyUserController,
  updateUserController,
  createCategoryController,
  readCategoryController,
  readRealEstateFromCategoryController,
  createRealEstateController,
  readRealEstateController,
  createScheduleController
};
