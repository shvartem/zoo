/* eslint-disable class-methods-use-this */
const NewsService = require('../services/news.service');

const newsService = new NewsService();

class NewsController {
  async createNews(req, res) {
    const news = await newsService.createNews(req.body);

    res.status(201).json(news);
  }
}

module.exports = NewsController;
