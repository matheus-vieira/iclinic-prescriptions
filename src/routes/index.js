const sendFileRouter = require('./sendFileRouter')

module.exports =  (server) => {
    console.log('Setando rota para index');
    const router = sendFileRouter('/',  "/../static/index.html");
    server.use(router);
};;