import { Request, Response } from "express";
import listShedulesService from "../../services/schedules/listShedulesService";



const listShedulesController = async(req: Request, res: Response)=>{
    const propertyID: string = req.params.id
    const dataShedules = await listShedulesService(propertyID)

    return res.status(200).json(dataShedules)
}

export default listShedulesController;