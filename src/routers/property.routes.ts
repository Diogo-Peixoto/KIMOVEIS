import { Router } from "express";
import createPropertyController from "../controllers/properties/createPropertyController";
import listAllPropertiesController from "../controllers/properties/listAllPropertiesController";
import ensureAdminMiddleare from "../middlewares/ensureAdminMiddleare";
import ensureAuthMiddleware from "../middlewares/ensureAuthmiddleware";
import essureDataValidMiddleware from "../middlewares/ensureDataValidMiddleware"
import { propertiesRequestSchema } from "../schemas/properties";

const propertyRouter = Router()

propertyRouter.post("", essureDataValidMiddleware(propertiesRequestSchema), ensureAuthMiddleware, ensureAdminMiddleare, createPropertyController)
propertyRouter.get("", listAllPropertiesController)

export default propertyRouter;