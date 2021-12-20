class ContentTypeNotSupported extends Error {
    constructor(contentType) {
        super(`Formato ${contentType} nao suportado`);
        this.name = "ContentTypeError";
    }
}

module.exports = ContentTypeNotSupported;
