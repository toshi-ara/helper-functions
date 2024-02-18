"use strict";
// References:
// - https://github.com/math-io/float64-from-words
//
// above files are distributed by MIT license
// Copyright (c) 2016 The Compute.io Authors.
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLowWord = void 0;
/**
 * FUNCTION: setLowWord(x, low)
 *	Sets the less significant 32 bits of a double-precision floating-point number.
 *
 * @param {Number} x - double
 * @param {Number} low - unsigned 32-bit integer to replace the lower order word of `x`
 * @returns {Number} new double having the same higher order word as `x`
 */
const isLittleEndian_js_1 = require("./isLittleEndian.js");
// VARIABLES //
let FLOAT64_VIEW = new Float64Array(1);
let UINT32_VIEW = new Uint32Array(FLOAT64_VIEW.buffer);
function setLowWord(x, low) {
    const LOW = (0, isLittleEndian_js_1.isLittleEndian)() ? 0 : 1;
    FLOAT64_VIEW[0] = x;
    UINT32_VIEW[LOW] = (low >>> 0); // identity bit shift to ensure integer
    return FLOAT64_VIEW[0];
}
exports.setLowWord = setLowWord;
