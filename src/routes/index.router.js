const router = require('express').Router();

const NewsService = require('../services/news.service')
const TariffsService = require('../services/tarifs.service');

router.get('/', async (req, res) => {
  const news = await NewsService.findLastNews();
  const tariffs = await TariffsService.getAllTarifs()
  console.log(tariffs);
  res.render('index', { categories: req.categories, news, tariffs });
});



module.exports = router;
