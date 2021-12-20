module.exports = {
    app: {
        port : process.env.PORT,
    },
    db : {
        production: process.env.DB_URL
    },
}
