/* eslint-disable class-methods-use-this */
const NewsService = require('../services/news.service');

const newsService = new NewsService();

class IndexController {
  async getLastNews() {
    const lastNews = await newsService.findLastNews();
    return lastNews;
  }
}

module.exports = IndexController;
