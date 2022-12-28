import { Request, Response } from "express"
import listAllCategoriesService from "../../services/categories/listAllCategoriesService"
import listPropertyInCatedoryService from "../../services/categories/listPropertyInCatedoryService"


const listAllCategoriesController = async(req: Request, res: Response)=>{
    const allCategories = await listAllCategoriesService()

    return res.status(200).json(allCategories)
}

export default listAllCategoriesController;