const request = require("supertest");
const { expect } = require("chai");

describe("Prescription's endpoint", () => {
  let server;

  const malFormed = async (data) => {
    const response = await request(server)
      .post("/v2/prescriptions")
      .send(data);
  
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.an("object");
    expect(response.body.error).to.be.an("object");
    expect(response.body.error.message).to.be.equal("malformed request");
    expect(response.body.error.code).to.be.equal("01");
  };

  beforeEach(function () {
    delete require.cache[require.resolve("../src/server")];
    server = require("../src/server");
  });

  afterEach(function (done) {
    server.close(done);
  });

  const malformedTheories = [
    "clinic", "physician", "patient", "text"
  ];

  malformedTheories.forEach(prop => {
    const validDataMalFormed = {
      clinic: { id: 1 },
      physician: { id: 1 },
      patient: { id: 1 },
      text: "Dipirona 1x ao dia",
    };
    it(`should show a malformed request without ${prop} on request`, async () => {
      delete validDataMalFormed[prop];
      malFormed(validDataMalFormed);
    }, 30000);
  });
});
