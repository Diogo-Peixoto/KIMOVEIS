import * as yup from "yup"
import { SchemaOf } from "yup"
import { IUserRequest } from "../../interfaces/users"

const userRequestSchema: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isAdm: yup.boolean().required()
})

const userResponseSchema = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    isAdm: yup.boolean().notRequired(),
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
    id: yup.number().notRequired()
})

const arrayResponse = yup.array(userResponseSchema)

const userUpdateSchema = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired()
})



export { userRequestSchema, userResponseSchema, arrayResponse, userUpdateSchema }