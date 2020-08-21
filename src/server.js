require("./config/error");
require("./config/enviroment/setEnv");
const server = require("./createServer/create");
const logger = require("./utils/logging/logger");

const randomPort = (min, max) => Math.floor(Math.random() * (max - min) + min);

const PORT = (() => {
  if (process.env.APP_ENV === "test") return randomPort(3000, 6000);
  return process.env.SERVER_PORT || randomPort(3000, 6000);
})();

module.exports = server.listen(PORT, () => {
  logger.debug(
    `API de Prescrições do teste da IClinic rodando na porta:${PORT}!`
  );
});
