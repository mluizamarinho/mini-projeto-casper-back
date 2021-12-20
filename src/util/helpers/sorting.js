module.exports = {
    sortNewsByCreationDate: (a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    }
}