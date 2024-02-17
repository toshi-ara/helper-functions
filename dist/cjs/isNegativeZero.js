"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNegativeZero = void 0;
function isNegativeZero(x) {
    return (x === 0.0 && 1.0 / x === Number.NEGATIVE_INFINITY);
}
exports.isNegativeZero = isNegativeZero;
