var express = require('express');
var router = express.Router();

const { authenticate } = require('../middlewares/auth');

const basketController = require('../controllers').baskets;
const itemController = require('../controllers').items;
const userController = require('../controllers').users;
const orderController = require('../controllers').orders;

/* GET home page. */
router.get('/', authenticate, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/baskets', authenticate, basketController.newBasket);
router.get('/baskets', basketController.list);
router.get('/baskets/:id', basketController.getById);
router.put('/baskets/:id', authenticate, basketController.updateBasket);
router.delete('/baskets/:id', authenticate, basketController.deleteBasket);

router.post('/items', authenticate, itemController.new);
router.get('/items', authenticate, itemController.list);
router.get('/items/:id', itemController.getById);
router.put('/items/:id', authenticate, itemController.update);
router.delete('/items/:id', authenticate, itemController.delete);

router.get('/users', authenticate, userController.list);
router.get('/users/:id', userController.getById);
router.put('/users/:id', authenticate, userController.update);
router.delete('/users/:id', authenticate, userController.delete);

router.get('/orders', authenticate, orderController.list);
router.get('/orders/:id', orderController.getById);
router.put('/orders/:id', authenticate, orderController.update);
router.delete('/orders/:id', authenticate, orderController.delete);


module.exports = router;
