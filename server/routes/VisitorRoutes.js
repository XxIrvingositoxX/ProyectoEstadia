import express from "express";
import { createVisitor, getAllVisitors, getVisitor, updateVisitor } from "../controllers/VisitorController.js";

const router = express.Router()

router.get('/', getAllVisitors)
router.get('/:id', getVisitor)
router.post('/', createVisitor)
router.put('/:id', updateVisitor)

export default router;