console.log("[SYSTEM] Configurando variáveis de ambiente");

const dotenv = require("dotenv");

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

if (process.env.APP_ENV === "dev" &&
    process.env.APP_SHOW_ENV_VAR ===  6) {
  let varStr = JSON.stringify(result.parsed);
  console.log(`[DEBUG_DEV] Variáveis de ambiente=> ${varStr}`);
}
