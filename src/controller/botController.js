const newsRepository = require("../service/repositories/NewsRepository.js");


async function listarNoticias(req, res, categoria){
    const news = await newsRepository.listTenByCategory(categoria);
    let fulfilmentMessages;

    if(news.length === 0) {
            fulfilmentMessages =  [
                {
                    "text": {
                        "text": [
                            "Desculpa, não encontrei nenhuma notícia nessa categoria!"
                        ]
                    },
                    "platform": "FACEBOOK"
                },
                {
                    "quickReplies": {
                        "title": "Escolha uma categoria:",
                        "quickReplies": [
                            "Esportes",
                            "Política",
                            "Entretenimento",
                            "Famosos"
                        ]
                    },
                    "platform": "FACEBOOK"
                },
            ]
        } else {
            const elements = [];
            news.forEach(n => {
            elements.push({
                "title": n.title,
                "subtitle": n.description,
                "image_url": n.imgUrl,
                "default_action": {
                    "webview_height_ratio": "tall",
                    "messenger_extensions": false,
                    "type": "web_url",
                    "url": n.url
                },
                "buttons": [
                    {
                        "title": "Acessar",
                        "url": n.url,
                        "type": "web_url"
                    }
                ],
            })
            });

            fulfilmentMessages = [
                {
                    "payload": {
                        "facebook": {
                            "attachment": {
                                "payload": {
                                    "template_type": "generic",
                                    "elements": elements
                                },
                                "type": "template"
                            }
                        }
                    },
                    "platform": "FACEBOOK"
                }
            ]
        }

        res.json({"fulfillmentMessages" : fulfilmentMessages});
    }


module.exports = {
    webhook: async (req, res) => {
        const intentName = req.body.queryResult.intent.displayName;

        if(intentName === 'noticias.esporte') {
            listarNoticias(req,res,"esporte");
        }
        else if(intentName === 'noticias.politica'){
            listarNoticias(req,res,"politica");
        }
        else if(intentName === 'noticias.entretenimento'){
            listarNoticias(req,res,"entretenimento");
        }
        else if(intentName === 'noticias.famosos'){
            listarNoticias(req,res,"famosos");
        }
        
    },
}