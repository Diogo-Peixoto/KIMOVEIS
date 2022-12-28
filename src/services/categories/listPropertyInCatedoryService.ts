import AppDataSource from "../../data-source";
import Category from "../../entities/categories.entities";
import { AppError } from "../../errors";


const listPropertyInCatedoryService = async(categoryId: string): Promise<Category| null> =>{
    const categoryRepository = AppDataSource.getRepository(Category)

    const categoriesExist = await categoryRepository.findOneBy({id: categoryId})

    if(!categoriesExist){
        throw new AppError("Category nor exist",404)
    }

    const properties = await categoryRepository.findOne({
        where:{
            id: categoryId
        },
        relations:{
            properties:true
        }
    })

    return properties



}

export default listPropertyInCatedoryService;