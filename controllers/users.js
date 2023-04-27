const {User} = require('../models');

module.exports = {
    async list(req, res) {
        try {
          const users = await User.findAll();
          res.json(users);
        } catch (error) {
          res.status(500).json({ message: 'Error retrieving users', error });
        }
    },
    async getById(req, res) {
        try {
            const user = await User.findByPk(req.params.id); // how can we include the ITEMS associated with the baskets in this response?
    
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.json(user);
        }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving user', error });
        }
    },
    async update(req, res) {
        try {
        const [updated] = await User.update(req.body, {
            where: { id: req.params.id },
        });
    
        if (updated) {
            const updatedUser = await User.findByPk(req.params.id);
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
        } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
        }   
    },

    async delete(req, res) {
        try {
            const deleted = await User.destroy({
              where: { id: req.params.id },
            });
        
            if (deleted) {
              res.status(204).json({ message: 'User deleted' });
            } else {
              res.status(404).json({ message: 'User not found' });
            }
          } catch (error) {
            res.status(500).json({ message: 'Error deleting user', error });
        }   
    }
}