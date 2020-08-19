const { createLogger, transports, format } = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const LOG_LEVEL = process.env.APP_LOG_LEVEL || 'info';
const logger = createLogger({
  level: LOG_LEVEL,
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new DailyRotateFile({
      filename: `logs/%DATE%/application.log`,
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      level: 'debug'
    }),
    new transports.File({
      filename: `./logs/${LOG_LEVEL}.log`,
      json: false,
      maxsize: 5242880,
      maxFiles: 5,
    }),
    new transports.Console(),
  ]
});

module.exports = logger;