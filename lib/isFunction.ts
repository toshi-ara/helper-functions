export function isFunction(arg: any): boolean {
  return toString.call(arg) === '[object Function]';
}

