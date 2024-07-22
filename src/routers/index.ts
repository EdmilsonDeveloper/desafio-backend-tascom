import { Router } from "express";
import TaskRouter from "./task.router"

const router = Router()

router.use(TaskRouter)

export default router;