
const botController = require('../controller/botController.js');

module.exports = app => {
    app.route('/botWebhook')
        .post(botController.webhook);
};