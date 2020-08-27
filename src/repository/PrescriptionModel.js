const { DataTypes } = require("sequelize");
const { error } = require("../utils/logging/logger");

module.exports = (sequelize) => {
  try {
    return sequelize.define("Prescription", {
      clinicId: DataTypes.INTEGER,
      physicianId: DataTypes.INTEGER,
      patientId: DataTypes.INTEGER,
      text: DataTypes.TEXT,
    });
  } catch (err) {
    error(err);
  }
};
