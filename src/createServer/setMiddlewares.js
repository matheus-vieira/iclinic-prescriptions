const json = require("express").json;
const { debug } = require("../utils/logging/logger");
const httpLogger = require("../utils/logging/httpLogger");

module.exports = (server) => {
  debug("Setando middlewares");

  debug("Setando json middleware");
  server.use(json());

  debug("Setando httpLogger middleware");
  server.use(httpLogger);
};
