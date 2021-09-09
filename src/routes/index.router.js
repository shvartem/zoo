const router = require('express').Router();
const IndexController = require('../controllers/index.controller');

const indexController = new IndexController();

router.get('/', indexController.getLastNews);

module.exports = router;
