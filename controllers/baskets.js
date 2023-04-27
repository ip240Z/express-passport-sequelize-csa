const { Basket, Item, User } = require('../models');

module.exports = {
    async newBasket(req, res) {
        try {
            const basket = await Basket.create(req.body);
            res.status(201).json(basket);
        } catch (error) {
            res.status(500).json({ message: 'Error creating basket', error });
        }
    },

    async list(req, res) {
        try {
          const baskets = await Basket.findAll(); // how can we include the ITEMS associated with the baskets in this response?
          res.json(baskets);
        } catch (error) {
          res.status(500).json({ message: 'Error retrieving baskets', error });
        }
    },
    
    async getById(req, res) {
        try {
            const basket = await Basket.findByPk(req.params.id); // how can we include the ITEMS associated with the baskets in this response?
    
        if (!basket) {
            res.status(404).json({ message: 'Basket not found' });
        } else {
            res.json(basket);
        }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving basket', error });
        }
    },
    async updateBasket(req, res) {
        try {
        const [updated] = await Basket.update(req.body, {
            where: { id: req.params.id },
        });
    
        if (updated) {
            const updatedBasket = await Basket.findByPk(req.params.id);
            res.json(updatedBasket);
        } else {
            res.status(404).json({ message: 'Basket not found' });
        }
        } catch (error) {
        res.status(500).json({ message: 'Error updating basket', error });
        }   
    },

    async deleteBasket(req, res) {
        try {
            const deleted = await Basket.destroy({
              where: { id: req.params.id },
            });
        
            if (deleted) {
              res.status(204).json({ message: 'Basket deleted' });
            } else {
              res.status(404).json({ message: 'Basket not found' });
            }
          } catch (error) {
            res.status(500).json({ message: 'Error deleting basket', error });
        }   
    }
};

