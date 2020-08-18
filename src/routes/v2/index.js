const prescriptionsRouter = require('./prescriptions');
module.exports = (server) => {
    console.log('Setando rotas v2');

    server.use("/v2", prescriptionsRouter);
};