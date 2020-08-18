const indexRoute = require("../routes/index");
const healthCheckRoute = require("../routes/healthCheck");
const v2Route = require("../routes/v2/index");

module.exports = (server) => {
  console.log("Setando rotas");
  indexRoute(server);
  healthCheckRoute(server);
  v2Route(server);

};
