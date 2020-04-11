import * as helpers from './helpers';

const inspect = Symbol.for('nodejs.util.inspect.custom');

function chapter(name) {
  console.clear();
  console.log(`CHAPTER: ${name}`);
}

function log(...texts) {
  console.log('LOG: ', ...texts);
}

chapter('One. Container data type (Box)');
const c1r1 = [0]
  .map(helpers.summ(1))
  .map(helpers.multiply(2))
  [0];

const Box = (x) => ({
  map: func => Box(func(x)),
  fold: func => func(x),
  [inspect]: () => `Box(${x})`,
});

const c1r2 = Box(0)
  .map(helpers.summ(1))
  .map(helpers.multiply(2))

log(c1r1);
log(c1r2);

chapter('Two. Single composed expression using Box');
const firstProduct = 'The first price will be 1200 rub';
const secondProduct = 'The second price will be 303 rub';

const firstProductPriceWithTax = Box(firstProduct)
  .map(helpers.getDigitsFromString)
  .map(Number)
  .fold(helpers.addTax(0.20));

const secondProductPriceWithTax = Box(secondProduct)
  .map(helpers.getDigitsFromString)
  .map(Number)
  .fold(helpers.addTax(0.20));

const c2r1 = Box(secondProductPriceWithTax)
  .map(helpers.summ(firstProductPriceWithTax))
  .fold(helpers.addCurrency('rub'));

log(c2r1);

const getDigitsFromString = str => Box(helpers.getDigitsFromString(str));
const addCurrency = (currency, price) => Box(helpers.addCurrency(currency, price));
const addTax = (factor, price) => Box(helpers.addTax(factor, price));
const summ = (a, b) => Box(helpers.summ(a, b));

const c2r2 = getDigitsFromString(firstProduct)
  .fold(price => 
    addTax(0.13, price)
      .fold(price => addCurrency('rub', price)))

log(c2r2);
