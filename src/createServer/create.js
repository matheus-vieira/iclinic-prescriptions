const express = require('express');
const middlewares = require('./setMiddlewares');
const routes = require('./setRoutes');

if (process.env.NODE_ENV === 'test') {
    require('./config/environment');
}

const create = () => {
    console.log('Inicializando servidor com expressJS');

    const server = express();

    middlewares(server);
    routes(server);

    return server;
};

module.exports = create();