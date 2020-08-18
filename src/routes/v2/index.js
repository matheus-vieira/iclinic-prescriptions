const prescriptionsRouter = require("./prescriptions");
const { debug } = require("../../utils/logging/logger");

module.exports = (server) => {
  debug("Setando rotas /v2");

  server.use("/v2", prescriptionsRouter);
};
