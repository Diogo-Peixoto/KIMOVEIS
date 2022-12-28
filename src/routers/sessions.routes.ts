import { Router } from "express";
import { createdSessionController } from "../controllers/sessions/sessionController";
import essureDataValidMiddleware  from "../middlewares/ensureDataValidMiddleware"
import { sessionRequestSchema } from "../schemas/sessions/sessionsSchema";

const sessionRouter = Router()

sessionRouter.post("", essureDataValidMiddleware(sessionRequestSchema), createdSessionController)

export default sessionRouter;