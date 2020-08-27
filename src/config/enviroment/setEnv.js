try {
  const result = require('dotenv').config();

  if (result.error) {
    throw result.error;
  }

  if (
    process.env.APP_ENV === 'dev' &&
    process.env.APP_SHOW_ENV_VAR === 'true'
  ) {
    let varStr = JSON.stringify(result.parsed);
    logger.debug(`[DEBUG_DEV] Variáveis de ambiente => ${varStr}`);
  }
} catch (error) {
  console.log('without env file');
}

const logger = require('../../utils/logging/logger');

logger.debug('[SYSTEM] Configurando variáveis de ambiente');