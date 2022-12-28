import { Request, Response } from "express"
import listPropertyInCatedoryService from "../../services/categories/listPropertyInCatedoryService"


const listPropertyInCatedoryController = async(req: Request, res: Response)=>{
    const categoryId: string = req.params.id
    const propertiesData = await listPropertyInCatedoryService(categoryId)

    return res.status(200).json(propertiesData)
}

export default listPropertyInCatedoryController;