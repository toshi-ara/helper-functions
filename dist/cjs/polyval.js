"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.polyval = void 0;
function polyval(x, coef) {
    let sum = 0;
    for (let i = coef.length - 1; i >= 0; i--) {
        sum *= x;
        sum += coef[i];
    }
    return sum;
}
exports.polyval = polyval;
