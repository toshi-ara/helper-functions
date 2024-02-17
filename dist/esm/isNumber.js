export function isNumber(num) {
    return (typeof num === 'number') ? num - num === 0 : false;
}
