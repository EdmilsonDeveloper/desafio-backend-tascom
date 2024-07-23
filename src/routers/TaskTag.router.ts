import { Router } from "express";
import { createAssociation, listAssociation } from "../controllers/taskTag.controller";

const router = Router()

router.post('/association',  createAssociation)
router.get('/association', listAssociation)
router.delete('/association/:id', )

export default router