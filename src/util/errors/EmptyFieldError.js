class EmptyFieldError extends Error {
    constructor(field) {
        super(`O campo ${field} eh obrigatorio`);
        this.name = "EmptyFieldError";
    }
}

module.exports = EmptyFieldError;
