const logger = require('../utils/logging/logger');
logger.debug('[SYSTEM] Configurando uncaughtException and unhandledRejection');

process.on('uncaughtException', err => {
    logger.error('[ERROR] Exceção não tratada: ', err);
});

process.on('unhandledRejection', (reason, promise) => {
    logger.error('[ERROR] Rejeição não tratada: ', reason);
});