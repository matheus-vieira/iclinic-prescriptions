const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    try {
        return sequelize.define('Prescription', {
            clinicId: DataTypes.INTEGER,
            physicianId: DataTypes.INTEGER,
            patientId: DataTypes.INTEGER,
            text: DataTypes.TEXT,
        });
    } catch (e) {
        console.error(e);
    }
};
