import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entities";

import { ISessionRequest } from "../../interfaces/sessions";
import jwt  from "jsonwebtoken"
import "dotenv/config"
import { AppError } from "../../errors";

const createdSessionServices = async({ email, password }: ISessionRequest): Promise<string> => {
    
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({ email: email })

    if(!user){
        throw new AppError("Email or password invalid", 403)
    }

    if(!user.isActive){
        throw new AppError("User not active", 400)
    }

    const passwordMatch = await compare(password, user.password)
    
    if(!passwordMatch){
        throw new AppError("Email or password invalid", 403)
    }

    const token = jwt.sign(
        {
            type: user.isAdm
        },
        process.env.SECRET_KEY!,
        {
            subject: String(user.id),
            expiresIn: '24h'
        }
    )

    return token
}

export default createdSessionServices;