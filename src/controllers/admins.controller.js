/* eslint-disable class-methods-use-this */
const AdminsService = require('../services/admins.service');
const CategoriesService = require('../services/categories.service');

const adminsService = new AdminsService();
const categoriesService = new CategoriesService();

class AdminsController {
  async renderLoginPage(req, res) {
    console.log(req.body);
    // const admin = await adminsService.findAdminByEmail(email);

    res.render('admin/adminLogin');
  }

  async renderAdminPage(req, res) {
    console.log(req.body);
    // const admin = await adminsService.findAdminByEmail(email);

    res.render('admin/adminPage', { categories: req.categories });
  }

  async loginAdmin(req, res) {
    const { email, password } = req.body;
    try {
      const admin = await adminsService.findAdminByEmail(email);
      res
        .status(200)
        .json({ link: `http://localhost:3000/admins/${admin.id}` });
    } catch (error) {
      const { message } = error;
      console.error(message);
    }
  }

  async createNewAdmin(req, res) {
    try {
      const newAdminData = req.body;
      newAdminData.isSuperAdmin = Boolean(req.body.isSuperAdmin);

      const newAdmin = await adminsService.createNewAdmin(req.body);

      res.status(200).json(newAdmin);
    } catch (error) {
      const { message } = error;
      console.error(message);

      res.status(500).json({ message });
    }
  }
}

module.exports = AdminsController;
