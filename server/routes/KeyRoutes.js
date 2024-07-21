import express from "express";
import { getAllKeys, getKey, updateKey } from "../controllers/KeyController.js";

const router = express.Router()

router.get('/', getAllKeys)
router.get('/:id', getKey)
router.put('/:id', updateKey)

export default router