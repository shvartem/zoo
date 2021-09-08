const router = require('express').Router();

const NewsService = require('../services/news.service');

router.get('/', async (req, res) => {
  const news = await NewsService.findAllNews();
  res.render('news', { news })
})

router.get('/:id', async (req, res) => {
  const news = await NewsService.findNewsById(req.params.id);
  res.render('news', { news })
})

module.exports = router;