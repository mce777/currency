var __paeckchen_cache__ = [];
function __paeckchen_require__(index) {
    if (!(index in __paeckchen_cache__)) {
        __paeckchen_cache__[index] = { module: { exports: {} } };
        modules[index](__paeckchen_cache__[index].module, __paeckchen_cache__[index].module.exports);
    }
    return __paeckchen_cache__[index].module;
}
var modules = [function _0(module, exports) {
        'use strict';
        var Converter = function () {
            function Converter(curRate) {
                this.rate = curRate;
            }
            ;
            Converter.prototype.convert = function (amount) {
                return this.rate * amount;
            };
            ;
            Converter.prototype.convertBack = function (amount) {
                return amount / this.rate;
            };
            return Converter;
        }();
        exports.Converter = Converter;
    }];
__paeckchen_require__(0);
//# sourceMappingURL=currency.js.map