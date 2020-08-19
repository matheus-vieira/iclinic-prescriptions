const sendFileRouter = require("./sendFileRouter");
const logger = require("../utils/logging/logger");

module.exports = (server) => {
  const router = sendFileRouter("/", "/../static/index.html");
  server.use(router);
};
