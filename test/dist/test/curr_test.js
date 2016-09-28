"use strict";
var currency_1 = require('../src/currency');
var chai_1 = require('chai');
describe('Testing the new and improved Currency Converter', function () {
    it('should convert correctly', function () {
        var ctest = new currency_1.Converter('AUD');
        var ctestResult = ctest.convert(46);
        chai_1.assert.equal(ctestResult, '30.5532', 'Did not convert correctly');
    });
    it('should convert back to original currency', function () {
        var cbtest = new currency_1.Converter('USD');
        var cbtestResult = cbtest.convert(45);
        var convertBackResult = cbtest.convertBack(cbtestResult);
        chai_1.assert.equal(convertBackResult, '46', 'Did not convert back correctly');
    });
});
//# sourceMappingURL=curr_test.js.map