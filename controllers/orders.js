const {Order} = require('../models');

module.exports = {
    async list(req, res) {
        try {
          const orders = await Order.findAll();
          res.json(orders);
        } catch (error) {
          res.status(500).json({ message: 'Error retrieving orders', error });
        }
    },
    async getById(req, res) {
        try {
            const order = await Order.findByPk(req.params.id); // how can we include the ITEMS associated with the items in this response?
    
        if (!order) {
            res.status(404).json({ message: 'Order not found' });
        } else {
            res.json(order);
        }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving order', error });
        }
    },
    async update(req, res) {
        try {
        const [updated] = await Order.update(req.body, {
            where: { id: req.params.id },
        });
    
        if (updated) {
            const updatedOrder = await Order.findByPk(req.params.id);
            res.json(updatedOrder);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
        } catch (error) {
        res.status(500).json({ message: 'Error updating order', error });
        }   
    },

    async delete(req, res) {
        try {
            const deleted = await Order.destroy({
              where: { id: req.params.id },
            });
        
            if (deleted) {
              res.status(204).json({ message: 'Order deleted' });
            } else {
              res.status(404).json({ message: 'Order not found' });
            }
          } catch (error) {
            res.status(500).json({ message: 'Error deleting order', error });
        }   
    }
}