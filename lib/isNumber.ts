export function isNumber(num: any): boolean {
  return (typeof num === 'number') ? num - num === 0 : false;
}

