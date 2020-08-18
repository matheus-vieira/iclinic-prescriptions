const indexRoute = require("../routes/index");
const healthCheckRoute = require("../routes/healthCheck");
const v2Route = require("../routes/v2/index");
const { debug } = require("../utils/logging/logger");

module.exports = (server) => {
  debug("Setando rotas");
  indexRoute(server);
  healthCheckRoute(server);
  v2Route(server);
};
