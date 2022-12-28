import express from "express"
import "express-async-errors"
import "reflect-metadata"
import userRouter from "./routers/users.routes"

import sessionRouter from "./routers/sessions.routes"
import handleError from "./errors"
import categoryRouter from "./routers/category.routes"
import propertyRouter from "./routers/property.routes"
import scheduleRouter from "./routers/schedules.routes"




const app = express()
app.use(express.json())
app.use("/users",userRouter)
app.use("/login", sessionRouter)
app.use("/categories", categoryRouter)
app.use("/properties",propertyRouter)
app.use("/schedules", scheduleRouter)
app.use("", handleError)


export default app