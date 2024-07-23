import { Router } from "express";
import { createTask, deleteTask, filteredTask, listTask, updateTask } from "../controllers/task.controller";

const router = Router()

router.post('/tasks', createTask )
router.get('/tasks', listTask)
router.get('/tasksfilter', filteredTask)
router.patch('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)

export default router