import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users/index"
import createUserServices from "../../services/users/createUserServices";

const createUserController = async(req: Request, res: Response)=>{
    const userData : IUserRequest = req.body
    const newUser = await createUserServices(userData)

    return res.status(201).json(newUser)
}

export default createUserController;