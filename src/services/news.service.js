/* eslint-disable class-methods-use-this */
const db = require('../db/models');

class NewsService {
  static async findAllNews() {
    let news;

    try {
      news = await db.News.findAll();
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось найти все новости.' };
    }
    news = news.map(el => {
      el.content = `${el.content.substring(0, 140)}...`;
      return el
    })

    return news;
  }

  static async findLastNews() {
    let news;

    try {
      news = await db.News.findAll({
        raw: true,
        order: [['createdAt', 'DESC']],
        limit: 1,
      });
    } catch (error) {
      return { message: 'Не удалось найти все новости.' };
    }
    const [lastNews] = news
    lastNews.content = `${lastNews.content.substring(0, 140)}...`;
    return news;
  }

  async createNews({
    title,
    content,
    image,
    adminId = 6, // не забыть убрать
  }) {
    try {
      const news = await db.News.create({
        title,
        content,
        image,
        adminId,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      return news;
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось создать новость.' };
    }
  }

  static async findNewsById(id) {
    let news;

    try {
      news = await db.News.findAll({
        where: {
          id,
        },
      });
    } catch (error) {
      console.error(error);
      return { message: 'Не удалось найти новость.' };
    }

    return news;
  }

  async editNewsById({ id, title, content, image, adminId }) {
    let news;

    try {
      news = await db.News.update(
        {
          title,
          content,
          image,
          adminId,
          updatedAt: Date.now(),
        },
        {
          where: {
            id,
          },
        },
      );
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось отредактировать новость.' };
    }

    return news;
  }

  async deleteNewsById(id) {
    try {
      await db.News.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      console.error(error);

      return { message: 'Не удалось удалить новость.' };
    }

    return { message: 'Новость удалена.' };
  }
}

module.exports = NewsService;
