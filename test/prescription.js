const request = require("supertest");
const { expect } = require("chai");

const makeRequest = require("../src/utils/request");

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

const malFormed = async () => {
  const response = await callPrescriptions(validData);

  expect(response.status).to.be.equal(400);
  expect(response.body).to.be.an("object");
  expect(response.body.error).to.be.an("object");
  expect(response.body.error.message).to.be.equal("malformed request");
  expect(response.body.error.code).to.be.equal("01");
};

describe("Prescription's endpoint", () => {
  let validData, server;
  const callPrescriptions = async (data) => {
    return await request(server).post("/v2/prescriptions").send(data);
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

  it("should show a malformed request without clinic on request", async () => {
    delete validData.clinic;

    malFormed();
  }, 30000);

  it("should show a malformed request without physician on request", async () => {
    delete validData.physician;
    malFormed();
  }, 30000);

  it("should show a malformed request without patient on request", async () => {
    delete validData.patient;
    malFormed();
  }, 30000);

  it("should show a malformed request without text on request", async () => {
    delete validData.text;
    malFormed();
  }, 30000);

  it("should be succes with wrong clinic id", async () => {
    const response = await callPrescriptions({
      clinic: { id: 9 },
      physician: { id: 1 },
      patient: { id: 1 },
      text: "Dipirona 1x ao dia",
    });

    await checkDB(response);

    expect(response.body).to.be.an("object");
    expect(response.body.data).to.be.an("object");
    expect(response.body.data.clinic).to.be.an("object");
    console.log(response.body.data.clinic.id);
    expect(response.body.data.clinic.id).to.be.equal(null);
  }, 30000);
});
