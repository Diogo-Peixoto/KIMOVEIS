import { Request, Response, NextFunction } from "express";
import 'dotenv/config';
import AppDataSource from "../data-source";
import User from "../entities/users.entities";


const  ensureAdminMiddleare = async(req: Request, res: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(User)

    const userId = req.user.id
    const user = await userRepository.findOneBy({ id: userId })

    if(!user!.isAdm){
        res.status(403).json({ message: "User not admin" })
    }
    
    return next()

}

export default ensureAdminMiddleare;