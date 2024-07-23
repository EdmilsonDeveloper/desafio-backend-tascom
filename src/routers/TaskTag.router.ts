import { Router } from "express";
import { createTaskTag, deleteTaskTag, listTaskTag } from "../controllers/taskTag.controller";

const router = Router()

router.post('/taskTags', createTaskTag )
router.get('/taskTags', listTaskTag)
router.delete('/taskTags/:id', deleteTaskTag)

export default router