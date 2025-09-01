import User from '../models/user/User.js';
import express from 'express';

const router = express.Router();

// Request access
router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
});

router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    res.send(user);
});

router.post('/', async (req, res) => {
    console.log(req.body)
    const user = await User.create(req.body);
    res.send(user);
});

router.put('/:id', async (req, res) => {
    const userId = req.params.id;
    const user = await User.update(
        req.body,
        {
            where: {
                id: userId,
            },
        },
    );
    res.send(user[0]);
});

router.delete('/:id', async (req, res) => {
    const userId = req.params.id;
    const user = await User.destroy(
        {
            where: {
                id: userId,
            },
        }
    );
    res.send(user[0]);
});

export default router;;