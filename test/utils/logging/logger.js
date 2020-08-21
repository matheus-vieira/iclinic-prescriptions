const { expect } = require("chai");
const logger = require("../../../src/utils/logging/logger");


describe("logger instance", function () {
  it("logger is an object", function () {
    expect(logger).to.be.an("object");
  });
  it("logger has debug method", function () {
    expect(logger.debug).to.be.an("function");
  });
  it("logger has error method", function () {
    expect(logger.debug).to.be.an("function");
  });
});
