"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = void 0;
function isFunction(arg) {
    return toString.call(arg) === '[object Function]';
}
exports.isFunction = isFunction;
