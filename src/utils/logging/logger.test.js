const { expect } = require("chai");
const logger = require("./logger");


describe("logger instance", function () {
  it("has a 00 entry", function () {
    expect(logger).to.have.own.property("level");
  });
});
