import express from 'express'
import { getAllColleagues, getColleague, updateColleague } from '../controllers/ColleagueControler.js'

const router = express.Router()

router.get('/', getAllColleagues)
router.get('/:id', getColleague)
router.put('/:id', updateColleague)

export default router;