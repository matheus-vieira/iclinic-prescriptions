const server = require('./createServer/create');

console.log("env SERVER_PORT", process.env.SERVER_PORT);
const PORT = process.env.SERVER_PORT || 3333;

server.listen(PORT, () => {
    console.log(`API de Prescrições do teste da IClinic rodando na porta:${PORT}!`);
});