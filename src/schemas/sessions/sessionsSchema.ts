import * as yup from "yup"
import { SchemaOf } from "yup"
import { ISessionRequest } from "../../interfaces/sessions"

const sessionRequestSchema: SchemaOf<ISessionRequest> = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})

export { sessionRequestSchema }