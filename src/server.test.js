const request = require("supertest");
const { expect } = require("chai");

describe("loading express server", function () {
  let server;
  beforeEach(function (done) {
    delete require.cache[require.resolve('./server')];
    server = require('./server');
    done();
  });
  afterEach(function (done) {
    server.close(done);
  });
  it("responds to /", function (done) {
    request(server).get("/").expect(200, done);
  });
  it("responds to /healthCheck", function (done) {
    request(server).get("/healthCheck").expect(200, done);
  });
  it("404 everything else", function (done) {
    request(server).get("/foo/bar").expect(404, done);
  });
});
