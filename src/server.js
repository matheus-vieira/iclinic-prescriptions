require('./config/error');
require('./config/enviroment/setEnv');
const server = require('./createServer/create');
const logger = require('./utils/logging/logger');

const PORT = process.env.SERVER_PORT || 3333;

server.listen(PORT, () => {
    logger.info(`API de Prescrições do teste da IClinic rodando na porta:${PORT}!`);
});