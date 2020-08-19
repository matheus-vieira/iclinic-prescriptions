const express = require("express");

const logger = require("../utils/logging/logger");

const middlewares = require("./setMiddlewares");
const routes = require("./setRoutes");

if (process.env.NODE_ENV === "test") {
  require("./config/environment");
}

const create = () => {
  logger.debug("Inicializando servidor com expressJS");

  const server = express();

  middlewares(server);
  routes(server);

  return server;
};

module.exports = create();
