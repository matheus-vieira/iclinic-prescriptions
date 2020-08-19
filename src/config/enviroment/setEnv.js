const result = require("dotenv").config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

if (result.error) {
  throw result.error;
}

const logger = require("../../utils/logging/logger");

logger.debug("[SYSTEM] Configurando variáveis de ambiente");

if (process.env.APP_ENV === "dev" && process.env.APP_SHOW_ENV_VAR === "true") {
  let varStr = JSON.stringify(result.parsed);
  logger.debug(`[DEBUG_DEV] Variáveis de ambiente => ${varStr}`);
}
