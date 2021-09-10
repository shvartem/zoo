const router = require('express').Router();

const NewsService = require('../services/news.service');
const TariffsService = require('../services/tariffs.service');
const PhotosService = require('../services/photos.service');

const tariffsService = new TariffsService()

router.get('/', async (req, res) => {
  const news = await NewsService.findLastNews();
  const tariffs = await tariffsService.getAllTarifs();
  const images = await PhotosService.getAllPhotos();
  if(req.session?.admin?.name) {
    const {admin} = req.session
    res.render('index', { categories: req.categories, news, tariffs, images, admin });
    return
  }
  res.render('index', { categories: req.categories, news, tariffs, images });
});

module.exports = router;
