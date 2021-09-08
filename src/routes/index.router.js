const router = require('express').Router();
const IndexController = require('../controllers/index.controller');

const indexController = new IndexController();

router.get('/', async (req, res) => {
  const lastNews = await indexController.getLastNews();
  lastNews.content = `${lastNews.content.substring(0, 140)}...`;

  res.render('index', { categories: req.categories, lastNews });
});

module.exports = router;
