
import AppDataSource from "../../data-source";
import User from "../../entities/users.entities";
import { AppError } from "../../errors";

const deleteUserService = async(IdUser:number, userLogId: number): Promise<object> =>{
    const userRepository = AppDataSource.getRepository(User)
    const userLog = await userRepository.findOneBy({id: userLogId})
    const userParams = await userRepository.findOneBy({id: IdUser})

    if(!userParams){
        throw new AppError('User not exists',404 )
    }
    

    if(!userLog!.isAdm){
        throw new AppError('Not permission',403 )
    }

    if(!userParams.isActive){
        throw new AppError('User inative',400 )
    }

    await userRepository.update(
        {id: IdUser},
        { isActive: false }
    )
    
    
    
    return {}
}

export default deleteUserService;