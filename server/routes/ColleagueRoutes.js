import express from 'express'
import { getAllColleagues, getColleague, updateColleague, countColleaguesByState, searColleagues } from '../controllers/ColleagueControler.js'

const router = express.Router()

router.get('/search', searColleagues);
router.get('/', getAllColleagues);
router.get('/:id', getColleague);
router.put('/:id', updateColleague);
router.get('/count/state', countColleaguesByState);

export default router;