import View from '../models/view/View.js';
import express from 'express';

const router = express.Router();

// Request access
router.get('/', async (req, res) => {
    const views = await View.findAll();
    res.send(views);
});

router.get('/:id', async (req, res) => {
    const viewId = req.params.id;
    const view = await View.findByPk(viewId);
    res.send(view);
});

router.post('/', async (req, res) => {
    const view = await View.create(req.body);
    res.send(view);
});

router.put('/:id', async (req, res) => {
    const viewId = req.params.id;
    const view = await View.update(
        req.body,
        {
            where: {
                id: viewId,
            },
        },
    );
    res.send(view[0]);
});

router.delete('/:id', async (req, res) => {
    const viewId = req.params.id;
    const view = await View.destroy(
        {
            where: {
                id: viewId,
            },
        }
    );
    res.send(view[0]);
});

export default router;