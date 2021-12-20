const {ErrorMiddleware, FormatValidator} = require("./util/middlewares");
const newsRoutes = require('./routes/newsRoutes.js');
const webhookBot = require('./routes/webhookBot.js');

module.exports = app => {
    FormatValidator(app);
    newsRoutes(app);
    webhookBot(app);
    ErrorMiddleware(app);
}

