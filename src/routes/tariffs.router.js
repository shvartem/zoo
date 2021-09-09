const router = require('express').Router();
const TariffsController = require('../controllers/tariffs.controller');

const tariffsController = new TariffsController();

router.post('/', tariffsController.createNewTariff);

module.exports = router;
