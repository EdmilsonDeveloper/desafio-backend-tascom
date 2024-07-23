import { Router } from "express"
import { createTag, deleteTag, listTag, updateTag } from "../controllers/tag.controller"

const router = Router()

router.post('/tags', createTag )
router.get('/tags', listTag)
router.patch('/tags/:id', updateTag)
router.delete('/tags/:id', deleteTag)

export default router