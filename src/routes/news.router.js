const router = require('express').Router();
const NewsController = require('../controllers/news.controller');
const NewsService = require('../services/news.service');

const newsController = new NewsController();

router.get('/', async (req, res) => {
  const news = await NewsService.findAllNews();
  res.render('news', { news });
});

router.post('/', newsController.createNews);

router.get('/:id', async (req, res) => {
  const news = await NewsService.findNewsById(req.params.id);
  res.render('news', { news });
});

module.exports = router;
