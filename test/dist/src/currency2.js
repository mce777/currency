// import { baseCurName, rates } from './rates';
"use strict";
var Converter = (function () {
    function Converter(currencyRate) {
        this.rate = currencyRate;
    }
    ;
    Converter.prototype.convert = function (amountToConvert) {
        if (amountToConvert < 0) {
            throw new Error('Negative values are not permitted');
        }
        return (this.rate * amountToConvert);
    };
    ;
    Converter.prototype.convertBack = function (amountToConvert) {
        if (amountToConvert < 0) {
            throw new Error('Negative values are not permitted');
        }
        return (amountToConvert / this.rate);
    };
    return Converter;
}());
exports.Converter = Converter;
//# sourceMappingURL=currency2.js.map