import AppDataSource from "../../data-source";
import User from "../../entities/users.entities";
import { AppError } from "../../errors";
import {  IUserUpdate, IUserResponse } from "../../interfaces/users";
import { userResponseSchema } from "../../schemas/users/usersSchemas";

const updateUserService = async(dataUser:IUserUpdate, IdUser:number)/*: Promise<IUserResponse>*/ =>{
    const userRepository = AppDataSource.getRepository(User)
    const user: User| null = await userRepository.findOneBy({id: IdUser})


    if(!user){
        throw new AppError('User not exists',404)
    }


    const updateUser =  userRepository.create({
        ...user, ...dataUser
    })

    await userRepository.save(updateUser)

    const userValidate = await userResponseSchema.validate(updateUser,{
        stripUnknown: true
    })

    return userValidate
    
    
}

export default updateUserService;