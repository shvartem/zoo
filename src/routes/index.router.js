const router = require('express').Router();

const NewsService = require('../services/news.service');
const TariffsService = require('../services/tarifs.service');
const PhotosService = require('../services/photos.service');
const SchedulesService = require('../services/schedule.service');

router.get('/', async (req, res) => {
  const news = await NewsService.findLastNews();
  const tariffs = await TariffsService.getAllTarifs();
  const images = await PhotosService.getAllPhotos();
  const schedule = await SchedulesService.getSchedule();
  if (req.session?.admin?.name) {
    const { admin } = req.session;
    res.render('index', {
      categories: req.categories,
      news,
      tariffs,
      images,
      admin,
      schedule,
    });
    return;
  }
  res.render('index', { categories: req.categories, news, tariffs, images });
});

module.exports = router;
