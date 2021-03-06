# Зоопарк
### Сайт зоопарка с гелереей животных, администрированием, прямой транслацией из вольеров и чатом
Ссылка на сайт: [тыц](deploy) (Возможно, будет долго открываться, наберитесь терпения)
![](/readme-assets/main.gif)
![](/readme-assets/animal.gif)

## Используемый стек

 [<img align="left" alt="JavaScript" width="40px" src="https://img.icons8.com/color/48/000000/javascript--v1.png" />][github]
 [<img align="left" alt="Node.js" width="40px" src="https://img.icons8.com/color/48/000000/nodejs.png" />][github]
 [<img align="left" alt="PostgreSQL" width="40px" src="https://img.icons8.com/color/48/000000/postgreesql.png" />][github]
 
 <br/>
 <br/>
 <br/>
 
 - **Frontend:** HTML5, CSS3, Bootstrap
 - **Backend:** WebSockets, Node.js, ExpressJS, Handlebars, Multer, Sequelize ORM
 - **Database:** PostgreSQL

---
#### Реализован чат для обсуждения онлайн трансляции из вольеров
![](/readme-assets/chat.gif)

---
#### Возможности администратора
![](/readme-assets/admin-cabinet.gif)

- В кабинете администратора
    - [X] Добавление новых животных (также можно добавить фото)
    - [X] Добавление сотрудников (доступно только для главного администратора)
    - [X] Добавление тарифов (также можно добавить фото)
    - [X] Добавление новостей (также можно добавить фото)
    - [X] Редактирование графика работы зоопарка, который отображается на главной странице
    - [X] Изменение данных сотрудников
    - [X] Удаление сотрудников

- На сайте
    - [X] Редактирование информации о животном
    - [X] Добавление фотографий в галерею животного
    - [X] Удаление животного
    - [X] Редактирование новости
    - [X] Удаление новости
    - [X] Редактирование тарифа
    - [X] Удаление тарифа

---
#### Реализован динамический подбор фотографий на главной странице
![](/readme-assets/random-photos.gif)


[github]: https://github.com/shvartem/zoo
[deploy]: https://zoo-deploy.herokuapp.com
