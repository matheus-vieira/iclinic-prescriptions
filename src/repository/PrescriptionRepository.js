const Database = require("./database");

const PrescriptionModel = require("./PrescriptionModel");

class PrescriptionRepository extends Database {
  defineModel() {
    this.model = PrescriptionModel(this.database);
    this.database.sync();
  }

  async createPrescription({ clinic, patient, physician, text }) {
    return await this.create({
      clinicId: clinic.id,
      physicianId: physician.id,
      patientId: patient?.id,
      text: text,
    });
  }
}

module.exports = new PrescriptionRepository();
