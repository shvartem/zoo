const router = require('express').Router();

const NewsService = require('../services/news.service');
const TariffsService = require('../services/tarifs.service');
const PhotosService = require('../services/photos.service');

router.get('/', async (req, res) => {
  const news = await NewsService.findLastNews();
  const tariffs = await TariffsService.getAllTarifs();
  const images = await PhotosService.getAllPhotos();
  console.log(images);
  res.render('index', { categories: req.categories, news, tariffs, images });
});

module.exports = router;
