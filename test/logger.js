const { expect } = require("chai");
const logger = require("../src/utils/logging/logger");


describe("logger instance", function () {
  it("has a 00 entry", function () {
    expect(logger).to.have.own.property("level");
  });
});
