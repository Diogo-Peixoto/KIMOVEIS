import * as yup from "yup"
import { SchemaOf } from "yup"

const schedulesResponseSchema = yup.object().shape({
    id: yup.string().required(),
    date: yup.string().required(),
    hour:yup.string().required(),
    user: yup.object().shape({
        id: yup.number().required()
    }).required()

})

const scheduleArrayResponseSchema = yup.object().shape({
    schedules: yup.array(schedulesResponseSchema).required()
})


export { schedulesResponseSchema, scheduleArrayResponseSchema }