import { Router } from "express";
import TaskRouter from "./Task.router"
import TagRouter from "./Tag.router"
import TaskTagRouter from "./TaskTag.router"

const router = Router()

router.use(TaskRouter)
router.use(TagRouter)
router.use(TaskTagRouter)

export default router;