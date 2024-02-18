"use strict";
// References:
// - https://github.com/math-io/float64-copysign
// - https://github.com/math-io/float64-get-high-word
// - https://github.com/math-io/float64-to-words
// - https://github.com/math-io/float64-from-words
//
// above files are distributed by MIT license
// Copyright (c) 2016 The Compute.io Authors.
Object.defineProperty(exports, "__esModule", { value: true });
exports.copysign = void 0;
// COPYSIGN //
/**
 * FUNCTION: copysign(x, y)
 *	Returns a double-precision floating-point number
 *	with the magnitude of `x` and the sign of `y`.
 *
 * @param {Number} x - number from which to derive a magnitude
 * @param {Number} y - number from which to derive a sign
 * @returns {Number} a double-precision floating-point number
 */
const isLittleEndian_js_1 = require("./isLittleEndian.js");
// 10000000000000000000000000000000 => 2147483648 => 0x80000000
const SIGN_MASK = 0x80000000;
// 01111111111111111111111111111111 => 2147483647 => 0x7fffffff
const MAGNITUDE_MASK = 0x7fffffff;
let FLOAT64_VIEW = new Float64Array(1);
let UINT32_VIEW = new Uint32Array(FLOAT64_VIEW.buffer);
function copysign(x, y) {
    // Split `x` into higher and lower order words:
    let xx = toWords(x);
    let hx = xx[0];
    // Turn off the sign bit of `x`:
    hx &= MAGNITUDE_MASK;
    // Extract the higher order word from `y`:
    let hy = getHighWord(y);
    // Leave only the sign bit of `y` turned on:
    hy &= SIGN_MASK;
    // Copy the sign bit of `y` to `x`:
    hx |= hy;
    // Return a new value having the same magnitude as `x`,
    // but with the sign of `y`:
    return fromWords(hx, xx[1]);
}
exports.copysign = copysign;
// HIGH WORD //
/**
 * FUNCTION: getHighWord(x)
 *	Returns an unsigned 32-bit integer corresponding to
 *	the more significant 32 bits of a double-precision floating-point number.
 *
 * @param {Number} x - input value
 * @returns {Number} higher order word
 */
function getHighWord(x) {
    const HIGH = (0, isLittleEndian_js_1.isLittleEndian)() ? 1 : 0;
    FLOAT64_VIEW[0] = x;
    return UINT32_VIEW[HIGH];
}
// TO WORDS //
/**
 * FUNCTION: toWords(x)
 *	Splits a floating-point number into a higher order word (32-bit integer)
 *	and a lower order word (32-bit integer).
 *
 * @param {Number} x - input value
 * @returns {Number[]} two-element array containing a higher order word and a lower order word
 */
function toWords(x) {
    let HIGH, LOW;
    if ((0, isLittleEndian_js_1.isLittleEndian)() === true) {
        HIGH = 1; // second index
        LOW = 0; // first index
    }
    else {
        HIGH = 0; // first index
        LOW = 1; // second index
    }
    FLOAT64_VIEW[0] = x;
    return [UINT32_VIEW[HIGH], UINT32_VIEW[LOW]];
}
// TO FLOAT64 //
/**
 * FUNCTION: fromWords(high, low)
 *	Creates a double-precision floating-point number from a higher order word (32-bit integer) and a lower order word (32-bit integer).
 *
 * @param {Number} high - higher order word (unsigned 32-bit integer)
 * @param {Number} low - lower order word (unsigned 32-bit integer)
 * @returns {Number} floating-point number
 */
function fromWords(high, low) {
    let HIGH, LOW;
    if ((0, isLittleEndian_js_1.isLittleEndian)() === true) {
        HIGH = 1; // second index
        LOW = 0; // first index
    }
    else {
        HIGH = 0; // first index
        LOW = 1; // second index
    }
    UINT32_VIEW[HIGH] = high;
    UINT32_VIEW[LOW] = low;
    return FLOAT64_VIEW[0];
}
