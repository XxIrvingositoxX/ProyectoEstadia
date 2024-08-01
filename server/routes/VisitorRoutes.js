import express from "express";
import { createVisitor, getAllVisitors, getVisitor, updateVisitor, countVisitorsByState, searchVisitor } from "../controllers/VisitorController.js";

const router = express.Router()

router.get('/search', searchVisitor)
router.get('/', getAllVisitors)
router.get('/:id', getVisitor)
router.post('/', createVisitor)
router.put('/:id', updateVisitor)
router.get('/count/state', countVisitorsByState)

export default router;