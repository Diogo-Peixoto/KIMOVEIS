import AppDataSource from "../../data-source";
import User from "../../entities/users.entities";
import { IUserRequest, IUserResponse } from "../../interfaces/users";
import { userResponseSchema } from "../../schemas/users/usersSchemas";

const createUserServices = async(userData: IUserRequest)/*: Promise<IUserResponse>*/ =>{

    const userRepository = AppDataSource.getRepository(User)

    const newUser = userRepository.create(userData)
    await userRepository.save(newUser)

    const validate = await  userResponseSchema.validate(newUser, {
        stripUnknown: true
    })

    return validate
}

export default createUserServices;