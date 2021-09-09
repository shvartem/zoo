/* eslint-disable class-methods-use-this */
const NewsService = require('../services/news.service');

const newsService = new NewsService();

class NewsController {
  async createNews(req, res) {
    const newsData = req.body;
    newsData.image = req.file.path.replace(/^public\//, '');
    const news = await newsService.createNews(req.body);

    res.status(201).json(news);
  }
}

module.exports = NewsController;
