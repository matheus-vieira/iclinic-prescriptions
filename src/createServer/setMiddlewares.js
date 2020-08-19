const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { debug } = require("../utils/logging/logger");
const httpLogger = require("../utils/logging/httpLogger");

module.exports = (server) => {
  debug("Setando middlewares");

  debug("Setando helmet middleware");
  server.use(helmet());

  debug("Setando bodyParser.json middleware");
  server.use(bodyParser.json());

  server.use(morgan("combined"));

  debug("Setando httpLogger middleware");
  server.use(httpLogger);
};
