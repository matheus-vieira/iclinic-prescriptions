const { expect } = require("chai");
const { notFoundError } = require("../../src/utils/notFoundError");

describe("Create a not found error", function () {
  it("is a function", function () {
    expect(notFoundError).to.be.an("function");
  });
  it("physician not found", function () {
    try {
      notFoundError("02");
    } catch (error) {
      expect(error.message).to.be.equal("physician not found");
      expect(error.statusCode).to.be.equal(404);
    }
  });
  it("patient not found", function () {
    try {
      notFoundError("03");
    } catch (error) {
      expect(error.message).to.be.equal("patient not found");
      expect(error.statusCode).to.be.equal(404);
    }
  });
});
