import { Request, Response, NextFunction } from "express";

class AppError extends Error{

    statusCode:number

    constructor(message: string, statusCode: number = 400){
        super()
        this.message = message
        this.statusCode = statusCode
    }
}

const handleError = async(err: Error, req: Request, res: Response, next: NextFunction)=> {
    if(err instanceof AppError){
        return res.status(err.statusCode).send({ message: err.message })
    }
    
    return res.status(500).send({ message: "Internal server error"})
}

export default handleError

export { AppError, handleError };