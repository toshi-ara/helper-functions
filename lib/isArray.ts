export const isArray = Array.isArray || function isArray(arg) {
  return toString.call(arg) === '[object Array]';
};

