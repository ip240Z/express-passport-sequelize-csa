const { Item, User } = require('../models');

module.exports = {
    async new(req, res) {
        try {
            const item = await Item.create(req.body);
            res.status(201).json(item);
        } catch (error) {
            res.status(500).json({ message: 'Error creating item', error });
        }
    },

    async list(req, res) {
        try {
          const items = await Item.findAll(); // how can we include the ITEMS associated with the items in this response?
          res.json(items);
        } catch (error) {
          res.status(500).json({ message: 'Error retrieving items', error });
        }
    },
    
    async getById(req, res) {
        try {
            const item = await Item.findByPk(req.params.id); // how can we include the ITEMS associated with the items in this response?
    
        if (!item) {
            res.status(404).json({ message: 'Item not found' });
        } else {
            res.json(item);
        }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving item', error });
        }
    },
    async update(req, res) {
        try {
        const [updated] = await Item.update(req.body, {
            where: { id: req.params.id },
        });
    
        if (updated) {
            const updatedBasket = await Item.findByPk(req.params.id);
            res.json(updatedBasket);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
        } catch (error) {
        res.status(500).json({ message: 'Error updating item', error });
        }   
    },

    async delete(req, res) {
        try {
            const deleted = await Item.destroy({
              where: { id: req.params.id },
            });
        
            if (deleted) {
              res.status(204).json({ message: 'Item deleted' });
            } else {
              res.status(404).json({ message: 'Item not found' });
            }
          } catch (error) {
            res.status(500).json({ message: 'Error deleting item', error });
        }   
    }
}