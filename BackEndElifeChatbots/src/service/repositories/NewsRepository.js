const NewsModel = require('../../model/News/NewsModel.js');
const DataBaseError = require("../../util/errors/DataBaseError.js");
const sorting = require("../../util/helpers/sorting.js");

module.exports = {
    create: async news => {
        const instance = new NewsModel(news);
        const result = await instance.save();
        return result.toObject();
    },
    listAll: async () => {
        const result = await NewsModel.find();
        return result.map(model => model.toObject());
    },
    listTenByCategory: async (category) => {
        const result = await NewsModel.find({category: category});
        const news =  result.map(model => model.toObject());
        news.sort(sorting.sortNewsByCreationDate);
        return news.slice(0, 10);
    },
    updateNews: async (id, news) => {
        const result = await NewsModel.updateOne({_id: id}, news);
        if(result.n === 0) {
            throw new DataBaseError('Essa noticia nao existe!');
        }
    },
    deleteNews: async id => {
        const result = await NewsModel.deleteOne({_id: id});
        if(result.n === 0) {
            throw new DataBaseError('Essa noticia nao existe!');
        }
    }
}