
import { Request, Response } from "express"
import listAllPropertiesService from "../../services/properties/listAllPropertiesService";

const listAllPropertiesController = async(req: Request, res: Response)=>{
    const resProperties = await listAllPropertiesService()

    return res.status(200).json(resProperties)
}

export default listAllPropertiesController;