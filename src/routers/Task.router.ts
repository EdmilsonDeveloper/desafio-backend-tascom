import { Router } from "express";
import { createTask, deleteTask, filteredTask, listTask, updateTask } from "../controllers/task.controller";

const router = Router()

router.post('/task', createTask )
router.get('/task', listTask)
router.get('/taskfiltered', filteredTask)
router.patch('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)

export default router