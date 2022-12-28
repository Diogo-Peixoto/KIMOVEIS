import { Request, Response } from "express"
import { ICategoryRequest } from "../../interfaces/categories"
import createCategoryService from "../../services/categories/createCategoryService"


const createCategoryController = async(req: Request, res: Response)=>{
    req.body.name =  req.body.name.toLowerCase()
    const categoryName: ICategoryRequest = req.body
    const resCategory = await createCategoryService(categoryName)

    return res.status(201).json(resCategory)
}

export default createCategoryController;