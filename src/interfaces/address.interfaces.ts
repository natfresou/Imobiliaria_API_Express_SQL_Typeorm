import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { addressCreateSchema, addressSchema } from "../schemas";

type AddressCreate = z.infer<typeof addressCreateSchema>;
type AddressReturn =z.infer<typeof addressSchema>



export   {AddressCreate,AddressReturn};
