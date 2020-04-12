import curry from 'lodash/curry';

export const summ = curry((b, a) => a + b);
export const multiply = curry((b, a) => a * b);
export const divide = curry((b, a) => a / b);

/**
 * Get digits from string
 * @property {string} str to parse
 */
export const getDigitsFromString = str => {
  const result  = str.match(/(\d+)/);
  return result && result.length && result[0];
};

export const addTax = curry((factor, price) => {
  const tax = multiply(factor, price);
  return summ(tax, price);
});

export const addCurrency = curry((currency, price) => `${price} ${currency}`);

export const removePoundSign = str => str.replace('#', '');
