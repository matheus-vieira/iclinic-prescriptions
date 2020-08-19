const { Sequelize } = require("sequelize");

const logger = require("../utils/logging/logger");

module.exports = class Database {
  constructor() {
    this.model;
    this.createDb();
    this.defineModel();
  }

  defineModel() {
    throw new Error('You have to implement the method doSomething!');
  }

  createDb() {
    this.database = new Sequelize(
      process.env.DB_DATABASE,
      process.env.DB_USERNAME,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: logger.debug.bind(logger),
      }
    );
  }

  async isConnected() {
    try {
      await this.database.authenticate();
      logger.info("Connection has been established successfully.");
    } catch (error) {
      logger.error("Unable to connect to the database:", error);
    }
  }

  async create(model) {
    try {
      return await this.database.transaction((t) =>
        this.model.create(model, { transaction: t })
      );
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
};
