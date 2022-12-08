const request = require("supertest");
const { expect } = require("chai");

const PrescriptionRepository = require("../src/repository/PrescriptionRepository");

const checkDB = async (response) => {
  expect(response.status).to.be.equal(200);
  expect(response.body).to.be.an("object");
  expect(response.body.data).to.be.an("object");
  expect(response.body.data.id).to.be.an("number");

  const { dataValues } = await new PrescriptionRepository().model.findByPk(
    response.body.data.id
  );
  const expected = {
    data: {
      id: dataValues.id,
      clinic: { id: dataValues.clinicId },
      patient: { id: dataValues.patientId },
      physician: { id: dataValues.physicianId },
      text: { id: dataValues.text },
    },
  };

  expect(JSON.stringify(response.body)).to.be.equal(JSON.stringify(expected));
};

describe("Prescription's endpoint", () => {
  let validData, server;

  const callPrescriptions = async (data) => {
    return await request(server)
      .post("/v2/prescriptions")
      .send(data);
  };

  beforeEach(function () {
    delete require.cache[require.resolve("../src/server")];
    server = require("../src/server");
    validData = {
      clinic: { id: 1 },
      physician: { id: 1 },
      patient: { id: 1 },
      text: "Dipirona 1x ao dia",
    };
  });

  afterEach(function (done) {
    server.close(done);
  });

  it("should exist a perscription on database", async () => {
    const response = await callPrescriptions(validData);

    await checkDB(response);
  }, 30000);

  
  it("should be succes with wrong clinic id", async () => {
    let dataWrongClinicId = Object.create(validData);
    dataWrongClinicId.clinic = { id: 9 }
    const response = await callPrescriptions(dataWrongClinicId);

    await checkDB(response);

    expect(response.body).to.be.an("object");
    expect(response.body.data).to.be.an("object");
    expect(response.body.data.clinic).to.be.an("object");
    console.log(response.body.data.clinic.id);
    expect(response.body.data.clinic.id).to.be.equal(null);
  }, 30000);
});
