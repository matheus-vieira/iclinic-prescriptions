const { expect } = require("chai");
const httpLogger = require("../../../src/utils/logging/httpLogger");

describe("httpLogger instance", function () {
  it("httpLogger is an function", function () {
    expect(httpLogger).to.be.an("function");
  });
});
