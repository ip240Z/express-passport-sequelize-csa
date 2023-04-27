const express = require('express');
const router = express.Router();
const { Basket, BasketItem, Item } = require('../models');
const {authenticate} = require('../middlewares/auth')

// 
router.post('/', authenticate, async (req, res) => {
    try {
        const item = await Item.create(req.body);
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({ message: 'Error creating basket', error });
    }
});

router.get('/', async (req, res) => {
    try {
        const items = await Item.findAll(); //This will find every ITEM inside the "Item" 
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving items', error });
      }
})

router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findByPk(req.params.id); // This targets a specific ITEM inside the "Item" table by it's id
        
        if(!item) {
            return res.status(404).json({message: 'Item not found'});
        } else {
            res.json(item);
        }
    } catch(err) {
        res.status(500).json({ message: 'Error retrieving that item', err});
    }
})

module.exports = router