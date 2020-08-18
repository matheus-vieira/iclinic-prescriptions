const sendFileRouter = require('./sendFileRouter')

module.exports =  (server) => {
    console.log('Setando rota para healthCheck');
    const router = sendFileRouter('/healthCheck',  "/../static/healthCheck.html");
    server.use(router);
};;