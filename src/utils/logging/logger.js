const { createLogger, transports, format } = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

const LOG_LEVEL = process.env.APP_LOG_LEVEL || "info";

const transportList = [
  new DailyRotateFile({
    filename: `logs/${process.env.APP_ENV}/%DATE%/application.log`,
    datePattern: "YYYY-MM-DD-HH",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "14d",
    level: "debug",
  }),
  new transports.File({
    filename: `./logs/${process.env.APP_ENV}/${LOG_LEVEL}.log`,
    json: false,
    maxsize: 5242880,
    maxFiles: 5,
  }),
];

if (process.env.APP_ENV === "dev") transportList.push(new transports.Console());

const logger = createLogger({
  level: LOG_LEVEL,
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: transportList,
});

module.exports = logger;
