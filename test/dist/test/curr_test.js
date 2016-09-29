"use strict";
var currency2_1 = require('../src/currency2');
var chai_1 = require('chai');
describe('Testing of the Currency Converter', function () {
    describe('convert() function', function () {
        it('should convert correctly', function () {
            var ctest = new currency2_1.Converter(0.6642);
            var ctestResult = ctest.convert(46);
            chai_1.assert.equal(ctestResult, '30.5532', 'Did not convert correctly');
        });
        it('should not except values < 0', function () {
            var ctest = new currency2_1.Converter(0.6642);
            chai_1.assert.throws(function () { return ctest.convert(-10); }, 'Negative values are not permitted');
        });
    });
    describe('convertBack() function', function () {
        it('should convert back to original currency', function () {
            var cbtest = new currency2_1.Converter(0.8903);
            var cbtestResult = cbtest.convert(45);
            var convertBackResult = cbtest.convertBack(cbtestResult);
            chai_1.assert.equal(convertBackResult, '45', 'Did not convert back correctly');
        });
        it('should not except values < 0', function () {
            var cbtest = new currency2_1.Converter(0.8903);
            chai_1.assert.throws(function () { return cbtest.convertBack(-10); }, 'Negative values are not permitted');
        });
    });
});
//# sourceMappingURL=curr_test.js.map