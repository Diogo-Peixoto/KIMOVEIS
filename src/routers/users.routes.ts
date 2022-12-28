import { Router } from "express";
import createUserController from "../controllers/users/createUserController";
import deleteUserController from "../controllers/users/deleteUserController";
import listUsersController from "../controllers/users/listUsersController";
import updateUserController from "../controllers/users/updateUserController";
import authorizationModificationUser from "../middlewares/authorizationModificationUser";
import ensureAdminMiddleare from "../middlewares/ensureAdminMiddleare";
import ensureAuthMiddleware from "../middlewares/ensureAuthmiddleware";
import essureDataValidMiddleware from "../middlewares/ensureDataValidMiddleware";
import essureEmailExistMiddleware from "../middlewares/ensureEmailExistsMiddleware";
import { userRequestSchema } from "../schemas/users/usersSchemas";

const userRouter = Router()

userRouter.post("", essureDataValidMiddleware(userRequestSchema), essureEmailExistMiddleware, createUserController)
userRouter.get("", ensureAuthMiddleware, ensureAdminMiddleare, listUsersController)
userRouter.patch("/:id", ensureAuthMiddleware, authorizationModificationUser, updateUserController)
userRouter.delete("/:id", ensureAuthMiddleware, deleteUserController)

export default userRouter;