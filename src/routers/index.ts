import { Router } from "express";
import TaskRouter from "./task.router"
import TagRouter from "./Tag.router"

const router = Router()

router.use(TaskRouter)
router.use(TagRouter)

export default router;