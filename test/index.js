var should = require('chai').should();


describe('#exists', function () {
    it('verifies teradata module is installed', function () {
        var teradata = require("../index.js");
        teradata != null;
    });
});