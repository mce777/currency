"use strict";
var rates_1 = require('./rates');
var Converter = (function () {
    function Converter(curRate) {
        this.curr = curRate;
    }
    ;
    Converter.prototype.convert = function (amount) {
        var _this = this;
        return rates_1.rates.filter(function (e) { return e.curName === _this.curr; })
            .map(function (e) { return e.inBaseCur * amount; })
            .reduce(function (v) { return v; });
    };
    ;
    Converter.prototype.convertBack = function (amount) {
        var _this = this;
        return rates_1.rates.filter(function (e) { return e.curName === _this.curr; })
            .map(function (e) { return amount / e.inBaseCur; })
            .reduce(function (v) { return v; });
    };
    ;
    return Converter;
}());
exports.Converter = Converter;
var usdToEurConvert = new Converter('AUD');
console.log(usdToEurConvert.convert(46));
console.log(usdToEurConvert.convertBack(30.5532));
//# sourceMappingURL=test.js.map