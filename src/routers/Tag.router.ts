import { Router } from "express"
import { createTag, deleteTag, getTag, updateTag } from "../controllers/tag.controller"

const router = Router()

router.post('/tag', createTag )
router.get('/tag', getTag)
router.patch('/tag/:id', updateTag)
router.delete('/tag/:id', deleteTag)

export default router