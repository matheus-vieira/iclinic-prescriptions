const sendFileRouter = require('./sendFileRouter');
const logger = require('../utils/logging/logger');

module.exports =  (server) => {
    const router = sendFileRouter('/healthCheck',  "/../static/healthCheck.html");
    server.use(router);
};;