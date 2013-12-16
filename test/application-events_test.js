'use strict';

var expect = require("expect.js");
var application_events = require("../lib/application-events");


describe("application_events", function () {
    it("is defined", function () {
        expect(application_events).to.be.an('object');
    });
});
