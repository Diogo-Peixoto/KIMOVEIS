import { Router } from "express";
import createVisitController from "../controllers/schedules/createVisitController";
import listShedulesController from "../controllers/schedules/listShedulesController";
import ensureAdminMiddleare from "../middlewares/ensureAdminMiddleare";
import ensureAuthMiddleware from "../middlewares/ensureAuthmiddleware";


const scheduleRouter = Router()

scheduleRouter.post("", ensureAuthMiddleware, createVisitController)
scheduleRouter.get("/properties/:id", ensureAuthMiddleware, ensureAdminMiddleare, listShedulesController)

export default scheduleRouter;