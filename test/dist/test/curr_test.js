"use strict";
var currency_1 = require('../src/currency');
var chai_1 = require('chai');
describe('Testing the new and improved Currency Converter', function () {
    it('should convert correctly', function () {
        var ctest = new currency_1.Converter(0.6642);
        var ctestResult = ctest.convert(45);
        chai_1.assert.equal(ctestResult, '29.889', 'Did not convert correctly');
    });
    it('should convert back to original currency', function () {
        var cbtest = new currency_1.Converter(0.8903);
        var cbtestResult = cbtest.convert(45);
        var convertBackResult = cbtest.convertBack(cbtestResult);
        chai_1.assert.equal(convertBackResult, '45', 'Did not convert correctly');
    });
});
//# sourceMappingURL=curr_test.js.map