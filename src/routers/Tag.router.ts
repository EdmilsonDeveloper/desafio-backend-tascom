import { Router } from "express"
import { createTag, deleteTag, listTag, updateTag } from "../controllers/tag.controller"

const router = Router()

router.post('/tag', createTag )
router.get('/tag', listTag)
router.patch('/tag/:id', updateTag)
router.delete('/tag/:id', deleteTag)

export default router