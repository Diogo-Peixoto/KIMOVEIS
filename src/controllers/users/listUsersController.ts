import { Request, Response } from "express";
import listUsersServices from "../../services/users/listUsersServices";


const listUsersController = async(req: Request, res: Response)=>{
    const users  = await listUsersServices()

    return res.status(200).json(users)
}

export default listUsersController;