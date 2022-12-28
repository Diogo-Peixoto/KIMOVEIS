import { Request, Response } from "express"
import { IScheduleRequest } from "../../interfaces/schedules"
import createVisitService from "../../services/schedules/createVisitService"



const createVisitController = async(req: Request, res: Response)=>{
    const dataVisit: IScheduleRequest = req.body
    const userId: number = req.user.id
    const newVisit = await createVisitService(dataVisit, userId)

    return res.status(201).json(newVisit)
}

export default createVisitController;