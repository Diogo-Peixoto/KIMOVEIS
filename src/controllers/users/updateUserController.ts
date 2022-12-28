import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users/index"
import updateUserService from "../../services/users/updateUserService";

const updateUserController = async(req: Request, res: Response)=>{
    const dataUser: IUserUpdate = req.body
    const IdUser: number = parseInt(req.params.id )
    const newUser = await updateUserService(dataUser,IdUser)

    return res.status(200).json(newUser)
    
}

export default updateUserController