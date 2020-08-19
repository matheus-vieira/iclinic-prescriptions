const request = require("supertest");
const { expect } = require("chai");
const express = require('express');

describe("loading express server", function () {
  let server;
  beforeEach(function () {
    server = require("./server");
  });
  afterEach(function () {
    server = null;
  });

  it("has a express server listen method", function testSlash(done) {
    expect(server).to.have.own.property("listen");
    done();
  });
  it("responds to /", function testSlash(done) {
    request(server).get("/").expect(200, done);
  });
  it("responds to /healthCheck", function testSlash(done) {
    request(server).get("/healthCheck").expect(200, done);
  });
  it("404 everything else", function testPath(done) {
    request(server).get("/foo/bar").expect(404, done);
  });
});
