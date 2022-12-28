import { Request, Response } from "express"
import { IPropertyRequest } from "../../interfaces/properties"
import createPropertyService from "../../services/properties/createPropertyService"


const createPropertyController = async(req: Request, res: Response)=>{
    const propertyData: IPropertyRequest  = req.body
    const newCategory = await createPropertyService(propertyData)

    return res.status(201).json(newCategory)
}

export default createPropertyController;