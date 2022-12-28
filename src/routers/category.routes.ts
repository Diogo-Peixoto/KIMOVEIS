import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategoryController";
import listAllCategoriesController from "../controllers/categories/listAllCategoriesController";
import listPropertyInCatedoryController from "../controllers/categories/listPropertyInCatedoryController";
import ensureAdminMiddleare from "../middlewares/ensureAdminMiddleare";
import ensureAuthMiddleware from "../middlewares/ensureAuthmiddleware";
import essureDataValidMiddleware from "../middlewares/ensureDataValidMiddleware";
import { categoryRequest } from "../schemas/categories/categorySchema";

const categoryRouter = Router()

categoryRouter.post("", essureDataValidMiddleware(categoryRequest), ensureAuthMiddleware, ensureAdminMiddleare, createCategoryController)
categoryRouter.get("", listAllCategoriesController)
categoryRouter.get("/:id/properties", listPropertyInCatedoryController)

export default categoryRouter;