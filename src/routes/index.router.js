const router = require('express').Router();

const NewsService = require('../services/news.service')
const TariffsService = require('../services/tarifs.service');
const PhotosService = require('../services/photos.service')

router.get('/', indexController.getLastNews);

module.exports = router;
