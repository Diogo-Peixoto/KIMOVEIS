import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import Users from "../entities/users.entities";


const essureEmailExistMiddleware = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const userRepository = AppDataSource.getRepository(Users)

        const emailExist = await userRepository.findOneBy({ email: req.body.email })
        
        if(emailExist){
            return res.status(409).json({ message: "User already registered" })
        }

        return next()

    } catch(error:any){
        return res.status(400).json({ error: error.message })
    }
}

export default  essureEmailExistMiddleware;