const router = require('express').Router();
const AdminsController = require('../controllers/admins.controller');

const adminsController = new AdminsController();

router.get('/login', adminsController.renderLoginPage);

router.post('/login', adminsController.loginAdmin);

router.post('/', adminsController.createNewAdmin);

router.get('/:id', adminsController.renderAdminPage);

module.exports = router;
