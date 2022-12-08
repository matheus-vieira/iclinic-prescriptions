const sendFileRouter = require("./sendFileRouter");

module.exports = (server) => {
  const router = sendFileRouter("/healthCheck", "/../static/healthCheck.html");
  server.use(router);
};
