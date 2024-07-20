import express from 'express'
import { createUser, getAllUsers, getUser, updateUser } from '../controllers/UserController'

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)

export default router;