import 'reflect-metadata';
import 'express-async-errors';
import express, { Application } from 'express';;
import { categoriesRouter, loginRouter, realEstateRouter, schedulesRouter, usersRouter } from './routes';
import { handleErrors } from './middlewares/handleErrors.middleware';



const app: Application = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/categories", categoriesRouter);
app.use("/realEstate", realEstateRouter);
app.use("/schedules",schedulesRouter)


app.use(handleErrors);
export default app;
