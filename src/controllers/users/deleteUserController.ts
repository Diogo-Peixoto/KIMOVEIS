import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUserService";


const deleteUserController = async(req: Request, res: Response)=>{
    const userId:number = parseInt(req.params.id)
    const userLogId:number = req.user.id
    const users = await deleteUserService(userId, userLogId)

    return res.status(204).json(users)
}

export default deleteUserController;