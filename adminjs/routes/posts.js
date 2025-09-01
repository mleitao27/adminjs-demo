import Post from '../models/post/Post.js';
import express from 'express';

const router = express.Router();

// Request access
router.get('/', async (req, res) => {
    const posts = await Post.findAll();
    res.send(posts);
});

router.get('/:id', async (req, res) => {
    const postId = req.params.id;
    const post = await Post.findByPk(postId);
    res.send(post);
});

router.post('/', async (req, res) => {
    const post = await Post.create(req.body);
    res.send(post);
});

router.put('/:id', async (req, res) => {
    const postId = req.params.id;
    const post = await Post.update(
        req.body,
        {
            where: {
                id: postId,
            },
        },
    );
    res.send(post[0]);
});

router.delete('/:id', async (req, res) => {
    const postId = req.params.id;
    const post = await Post.destroy(
        {
            where: {
                id: postId,
            },
        }
    );
    res.send(post[0]);
});

export default router;