import AppDataSource from "../../data-source";
import User from "../../entities/users.entities";
import { arrayResponse } from "../../schemas/users/usersSchemas";
import { IUserResponse } from "../../interfaces/users"

const listUsersServices = async()/*: Promise<Array<IUserResponse>>*/ =>{
    const userRepository = AppDataSource.getRepository(User)

    const users =  await userRepository.find()

    const usersValidate = await arrayResponse.validate(users, {
        stripUnknown: true
    })

    return usersValidate
}

export default listUsersServices;