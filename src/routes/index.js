const sendFileRouter = require("./sendFileRouter");

module.exports = (server) => {
  const router = sendFileRouter("/", "/../static/index.html");
  server.use(router);
};
