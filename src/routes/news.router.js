const router = require('express').Router();
const NewsController = require('../controllers/news.controller');
const NewsService = require('../services/news.service');

const newsController = new NewsController();

router.get('/', async (req, res) => {
  const news = await NewsService.findAllNews();
  res.render('news', { categories: req.categories, news });
});

router.post('/', newsController.createNews);

router.get('/:id', async (req, res) => {
  const news = await NewsService.findNewsById(req.params.id);
  news[0].seeAll = true
  if(req.session.admin) {
    news[0].admin = true
  }
  res.render('news', { categories: req.categories, news });
});

module.exports = router;
