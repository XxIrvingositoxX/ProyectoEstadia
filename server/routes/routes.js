import express from 'express';
import { createUser, filterUsers, getAllUsers, getUser, searchUsers, updateUser } from '../controllers/UserController.js';

const router = express.Router();

router.get('/search', searchUsers);
router.get('/filter', filterUsers);
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);

export default router;
