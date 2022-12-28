import { Request, Response } from "express";
import { ISessionRequest } from "../../interfaces/sessions";
import createdSessionServices from "../../services/session/createdSessionServices";

const createdSessionController = async(req: Request, res: Response) => {
    const dataSession: ISessionRequest = req.body
    const token = await createdSessionServices(dataSession)

    return res.status(200).json({token})
}

export { createdSessionController }