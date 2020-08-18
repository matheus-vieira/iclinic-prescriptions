const indexRoute = require('../routes/index');
const healthCheckRoute = require('../routes/healthCheck');

module.exports = (server) => {
    console.log('Setando rotas');
    indexRoute(server);
    healthCheckRoute(server);
}