import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import User from "../entities/users.entities";
import { AppError } from "../errors";

const authorizationModificationUser = async(req: Request, res: Response, next: NextFunction) => {
    const keys = Object.keys(req.body)

    if(
        keys.includes("id")||
        keys.includes("isAdm")||
        keys.includes("isActive")
    ){
        throw new AppError("invalido data",401)
    }

    const userRepository = AppDataSource.getRepository(User)
    const idParams: number = parseInt(req.params.id)

    const userRequest: User|null = await userRepository.findOneBy({id: req.user.id})


    if(userRequest!.id != idParams && !userRequest!.isAdm){

        return res.status(401).json({ message: 'missing not permissions' })
    }
    
    return next()
}

export default authorizationModificationUser;
