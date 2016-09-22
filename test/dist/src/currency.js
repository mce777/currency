// import { baseCurName, rates } from './rates';
"use strict";
var Converter = (function () {
    function Converter(curRate) {
        this.rate = curRate;
    }
    ;
    Converter.prototype.convert = function (amount) {
        return (this.rate * amount);
    };
    ;
    Converter.prototype.convertBack = function (amount) {
        return (amount / this.rate);
    };
    return Converter;
}());
exports.Converter = Converter;
// const usdToEurConvert = new Converter(0.5);
// console.log(usdToEurConvert.convert(46));
// console.log(usdToEurConvert.convertBack(23));
//# sourceMappingURL=currency.js.map