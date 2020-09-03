const Database = require("./database");

const PrescriptionModel = require("./PrescriptionModel");

module.exports = class PrescriptionRepository extends Database {
  defineModel() {
    this.model = PrescriptionModel(this.database);
    this.database.sync();
  }

  async createPrescription({ clinic, patient, physician, text }) {
    return await this.create({
      clinicId: clinic ? clinic.id : null,
      physicianId: physician.id,
      patientId: patient ? patient : patient.id,
      text: text,
    });
  }
};