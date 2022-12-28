import AppDataSource from "../../data-source";
import Category from "../../entities/categories.entities";
import { AppError } from "../../errors";
import { ICategoryRequest, ICategoryResponse } from "../../interfaces/categories";
import { categoriesResponse } from "../../schemas/categories/categorySchema"


const createCategoryService = async(categoryData: ICategoryRequest): Promise<ICategoryResponse> =>{
    const categoryRepository = AppDataSource.getRepository(Category)

    const categoryExist = await categoryRepository.findOneBy(categoryData)

    if(categoryExist){
        throw new AppError("Category exist",409)
    }

    const newCategory = categoryRepository.create(categoryData)
    await categoryRepository.save(newCategory)

    const responseValidate = await categoriesResponse.validate(newCategory,{
        stripUnknown: true
    })
 
    return responseValidate

}

export default createCategoryService;