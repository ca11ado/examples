import * as helpers from './helpers';
import * as fp from './helpers-fp';

function chapter(name) {
  console.clear();
  console.log(`CHAPTER: ${name}`);
}

function log(...texts) {
  console.log('LOG: ', ...texts);
}

function xlog() {
}

chapter('One. Container data type (Box)');
const c1r1 = [0]
  .map(helpers.summ(1))
  .map(helpers.multiply(2))
  [0];
const c1r2 = fp.Box(0)
  .map(helpers.summ(1))
  .map(helpers.multiply(2))

xlog(c1r1);
xlog(c1r2);

chapter('Two. Single composed expression using Box');
const firstProduct = 'The first price will be 1200 rub';
const secondProduct = 'The second price will be 303 rub';

const firstProductPriceWithTax = fp.Box(firstProduct)
  .map(helpers.getDigitsFromString)
  .map(Number)
  .fold(helpers.addTax(0.20));

const secondProductPriceWithTax = fp.Box(secondProduct)
  .map(helpers.getDigitsFromString)
  .map(Number)
  .fold(helpers.addTax(0.20));

const c2r1 = fp.Box(secondProductPriceWithTax)
  .map(helpers.summ(firstProductPriceWithTax))
  .fold(helpers.addCurrency('rub'));

xlog(c2r1);

const getDigitsFromString = str => fp.Box(helpers.getDigitsFromString(str));
const addCurrency = (currency, price) => fp.Box(helpers.addCurrency(currency, price));
const addTax = (factor, price) => fp.Box(helpers.addTax(factor, price));
const summ = (a, b) => fp.Box(helpers.summ(a, b));

const c2r2 = getDigitsFromString(firstProduct)
  .fold(price => 
    addTax(0.13, price)
      .fold(price => addCurrency('rub', price)))

xlog(c2r2);

chapter('Three. Enforce a null check with composable code branching using Either.');

const colors = {
  red: '#ff4444',
  blue: '#3b5998',
  yellow: '#fff68f',
};
const getColor = name => {
  const color = colors[name];
  return color ? fp.Right(color) : fp.Left(name);
};
const c3r1 = getColor('blue')
  .map(helpers.removePoundSign)
  .fold(e => `error: has no color "${e}"`, color => color);
const c3r2 = getColor('green')
  .map(helpers.removePoundSign)
  .fold(e => `error: has color "${e}"`, color => color);

const fromNullable = x => x ? fp.Right(x) : fp.Left(null);
const getColor2 = name => fromNullable(colors[name]);
const c3r3 = getColor2('blue')
  .map(helpers.removePoundSign)
  .fold(e => `error: has color "${e}"`, color => color);
const c3r4 = getColor2('green')
  .map(helpers.removePoundSign)
  .fold(e => `error: has color "${e}"`, color => color);

xlog(c3r1);
xlog(c3r2);
xlog(c3r3);
xlog(c3r4);

/**
 * Chapter FOUR. Chaining with errors
 */

const configFile = 'config.json';
const c4r1 = helpers.getPort(configFile);
const c4r2 = fp.getPort(configFile);

log(c4r1);
log(c4r2);
