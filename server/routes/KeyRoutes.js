import express from "express";
import { getAllKeys, getKey, updateKey, countKeysByState } from "../controllers/KeyController.js";

const router = express.Router()

router.get('/', getAllKeys)
router.get('/:id', getKey)
router.put('/:id', updateKey)
router.get('/count/state', countKeysByState)

export default router