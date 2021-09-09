const router = require('express').Router();
const TariffsController = require('../controllers/tariffs.controller');
const upload = require('../middlewares/uploadFile.middleware');

const tariffsController = new TariffsController();

router.post('/', upload.single('image'), tariffsController.createNewTariff);

module.exports = router;
