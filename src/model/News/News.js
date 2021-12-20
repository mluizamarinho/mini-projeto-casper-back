const validators = require("../../util/helpers/validators.js");

class News {
    constructor(imgUrl, title, description, category, url) {
        this.imgUrl = imgUrl;
        this.title = title;
        this.description = description;
        this.category = category;
        this.url = url;
        this.validate();
    }

    validate() {
        validators.emptyField(this);
    }

}

module.exports = News;
