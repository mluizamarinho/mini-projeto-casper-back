const {Schema, model} = require('mongoose');

const NewsModel = new Schema({
        imgUrl: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    });

module.exports = model('News', NewsModel);