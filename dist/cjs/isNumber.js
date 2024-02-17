"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
function isNumber(num) {
    return (typeof num === 'number') ? num - num === 0 : false;
}
exports.isNumber = isNumber;
