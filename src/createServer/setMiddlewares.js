const json = require('express').json;
module.exports = (server) => {
    console.log('Setando middlewares');
    server.use(json());
}