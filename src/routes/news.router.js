const router = require('express').Router();
const NewsController = require('../controllers/news.controller');

const newsController = new NewsController();

router.post('/', newsController.createNews);

module.exports = router;
