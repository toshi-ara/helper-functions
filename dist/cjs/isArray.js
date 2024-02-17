"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = void 0;
exports.isArray = Array.isArray || function isArray(arg) {
    return toString.call(arg) === '[object Array]';
};
