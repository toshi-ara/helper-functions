export function isFunction(arg) {
    return toString.call(arg) === '[object Function]';
}
