const InvalidArgumentError = require("../errors/InvalidArgumentError.js");
const EmptyFieldError = require("../errors/EmptyFieldError.js");

module.exports = {
    fieldMinimumLength: (value, name, minimum) => {
        if(value.length < minimum) {
            throw new InvalidArgumentError(
                `O campo ${name} precisa ser maior que ${minimum} caracteres`
            );
        }
    },
    emptyField: (object) => {
        for(let prop in object) {
            if(!object[prop]) {
                throw new EmptyFieldError(prop);
            }
        }
    },
}
