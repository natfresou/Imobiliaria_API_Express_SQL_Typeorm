import { Column, Entity, IntegerType, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realEstates.entity";
import { TimestampExtended } from "typeorm/driver/mongodb/bson.typings";
import User from "./users.entity";

@Entity('schedules')
 class Schedule {
    @PrimaryGeneratedColumn("increment")
    id:number;

    @Column({type:"date"})
    date:string;

    @Column({type:"time"})
    hour:string;

    @ManyToOne(()=> RealEstate, (realStates)=> realStates.schedules)
    realEstate:RealEstate

    @ManyToOne(()=> User, (user)=> user.schedules)
    user:User
 }
 export default Schedule;