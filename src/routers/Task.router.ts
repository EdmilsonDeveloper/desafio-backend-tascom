import { Router } from "express";
import { createTask, deleteTask, getTask, updateTask } from "../controllers/task.controller";

const router = Router()

router.post('/task', createTask )
router.get('/task', getTask)
router.patch('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)

export default router