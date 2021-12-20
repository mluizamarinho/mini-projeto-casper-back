const newsController = require('../controller/newsController.js');

module.exports = app => {
    app.route('/news')
        .get(newsController.listNews)
        .post(newsController.addNews);
};
