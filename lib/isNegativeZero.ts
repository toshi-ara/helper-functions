export function isNegativeZero(x: number): boolean {
    return (x === 0.0 && 1.0 / x === Number.NEGATIVE_INFINITY);
}

