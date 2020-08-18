console.log('[SYSTEM] Configurando uncaughtException and unhandledRejection');

process.on('uncaughtException', err => {
    console.log('[ERROR] Exceção não tratada: ', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.log('[ERROR] Rejeição não tratada: ', reason);
});