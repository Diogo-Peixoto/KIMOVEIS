import AppDataSource from "../../data-source";
import Category from "../../entities/categories.entities";
import * as yup from "yup"
import { categoriesResponse } from "../../schemas/categories/categorySchema";
import { ICategoryResponse } from "../../interfaces/categories";


const listAllCategoriesService = async(): Promise<Array<ICategoryResponse> | undefined> => {
    const userRepository = AppDataSource.getRepository(Category)

    const users = await userRepository.find()

    const resValidated = await yup.array(categoriesResponse).validate(users,{
        stripUnknown: true
    })

    return resValidated

}

export default listAllCategoriesService;