const { expect } = require("chai");
const Messages = require("../../src/utils/errorMessageUtil");

const checkrop = (obj, prop, value) => {
  expect(obj).to.have.own.property(prop).equal(value);
};
const checkErrorProp = (key, prop, value) => {
  checkrop(Messages[key].error, prop, value);
};

describe("checking messages for 00", function () {
  it("has a 00 entry", function () {
    expect(Messages).to.have.own.property("00");
  });
  it("has 00 message equals success", function () {
    checkrop(Messages["00"], "message", "success");
  });
  it("has 00 code equals 00", function () {
    checkrop(Messages["00"], "code", "00");
  });
});

describe("checking messages for 01", function () {
  it("has a 01 entry", function () {
    expect(Messages).to.have.own.property("01");
  });
  it("has 01 as error property", function () {
    expect(Messages["01"]).to.have.own.property("error");
  });
  it("has 01 error.message property", function () {
    checkErrorProp("01", "message", "malformed request");
  });
  it("has 02 error.code equals 01", function () {
    checkErrorProp("01", "code", "01");
  });

  it("has a 02 entry", function () {
    expect(Messages).to.have.own.property("02");
  });
  it("has 02 as error property", function () {
    expect(Messages["02"]).to.have.own.property("error");
  });
  it("has 02 error.message property", function () {
    checkErrorProp("02", "message", "physician not found");
  });
  it("has 02 error.code equals 02", function () {
    checkErrorProp("02", "code", "02");
  });
});

describe("checking messages for 03", function () {
  it("has a 03 entry", function () {
    expect(Messages).to.have.own.property("03");
  });
  it("has 03 as error property", function () {
    expect(Messages["03"]).to.have.own.property("error");
  });
  it("has 03 error.message property", function () {
    checkErrorProp("03", "message", "patient not found");
  });
  it("has 03 error.code equals 03", function () {
    checkErrorProp("03", "code", "03");
  });
});

describe("checking messages for 04", function () {
  it("has a 04 entry", function () {
    expect(Messages).to.have.own.property("04");
  });
  it("has 04 as error property", function () {
    expect(Messages["04"]).to.have.own.property("error");
  });
  it("has 04 error.message property", function () {
    checkErrorProp("04", "message", "metrics service not available");
  });
  it("has 04 error.code equals 04", function () {
    checkErrorProp("04", "code", "04");
  });
});

describe("checking messages for 05", function () {
  it("has a 05 entry", function () {
    expect(Messages).to.have.own.property("05");
  });
  it("has 05 as error property", function () {
    expect(Messages["05"]).to.have.own.property("error");
  });
  it("has 05 error.message property", function () {
    checkErrorProp("05", "message", "physicians service not available");
  });
  it("has 05 error.code equals 05", function () {
    checkErrorProp("05", "code", "05");
  });
});

describe("checking messages for 06", function () {
  it("has a 06 entry", function () {
    expect(Messages).to.have.own.property("06");
  });
  it("has 06 as error property", function () {
    expect(Messages["06"]).to.have.own.property("error");
  });
  it("has 06 error.message property", function () {
    checkErrorProp("06", "message", "patients service not available");
  });
  it("has 06 error.code equals 06", function () {
    checkErrorProp("06", "code", "06");
  });
});

describe("checking messages for 07", function () {
  it("has a 07 entry", function () {
    expect(Messages).to.have.own.property("07");
  });
  it("has 07 as error property", function () {
    expect(Messages["07"]).to.have.own.property("error");
  });
  it("has 07 error.message property", function () {
    checkErrorProp("07", "message", "internal server error");
  });
  it("has 07 error.code equals 07", function () {
    checkErrorProp("07", "code", "07");
  });
});
