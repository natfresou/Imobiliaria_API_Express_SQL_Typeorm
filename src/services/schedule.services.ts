import { realEstateRepo, scheduleRepo, userRepo } from "../repositories";
import {
  RealEstateReturn,
  ScheduleCreate,
  ScheduleRealEstate,
} from "../interfaces";
import { AppError } from "../errors";
import { RealEstate, Schedule } from "../entities";


const createScheduleService = async (
  data: ScheduleCreate,
  userId: number
): Promise<void> => {
  const { realEstateId, date, hour } = data;

  let datesSugests = new Date(date);
  if (datesSugests.getDay() < 1 || datesSugests.getDay() > 5) {
    throw new AppError("Invalid date, work days are monday to friday");
  }

  let horario = new Date();
  let partesHorario = hour.split(":");
  horario.setHours(parseInt(partesHorario[0]), parseInt(partesHorario[1]));

  var horaInicioAgendamento = 8;
  var horaFimAgendamento = 18;

  if (
    horario.getHours() < horaInicioAgendamento ||
    horario.getHours() > horaFimAgendamento
  ) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM");
  }

  const foundRealEstate: RealEstateReturn | null =
    await realEstateRepo.findOneBy({
      id: Number(realEstateId),
    });
  if (!foundRealEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const foundUser = await userRepo.findOne({
    where: {
      id: userId,
    },
  });

  if (!foundUser) {
    throw new AppError("User not found", 404);
  }

  const foundUserSchedule = await scheduleRepo.findOne({
    where: {
      date: date,
      hour: hour,
      user: {
        id: userId,
      },
    },
  });

  if (foundUserSchedule) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const foundScheduleExist = await scheduleRepo.findOne({
    where: {
      date: date,
      hour: hour,
      realEstate: { id: realEstateId },
    },
  });
  if (foundScheduleExist) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const newScheduleCreate: Schedule = scheduleRepo.create({
    hour,
    date,
    realEstate: foundRealEstate,
    user: foundUser,
  });
  await scheduleRepo.save(newScheduleCreate);
};

const readScheduleRealEstateService = async (
  realEstateId: number,
  admin: boolean
): Promise<ScheduleRealEstate | void> => {
  if (!admin) {
    throw new AppError("Insufficient permission", 403);
  }

  const allSchedules: RealEstate | null = await realEstateRepo.findOne({
    where: { id: realEstateId },
    relations: ["schedules", "category", "address", "schedules.user"],
  });

  if (!allSchedules) {
    throw new AppError("RealEstate not found", 404);
  } else {
    return allSchedules;
  }
};

export { createScheduleService, readScheduleRealEstateService };
