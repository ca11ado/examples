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

chapter('Three. Enforce a null check with composable code branching using Either.');

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  [inspect]: () => `Left(${x})`,
});
const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  [inspect]: () => `Right(${x})`,
});
const colors = {
  red: '#ff4444',
  blue: '#3b5998',
  yellow: '#fff68f',
};
const getColor = name => {
  const color = colors[name];
  return color ? Right(color) : Left(name);
};
const c3r1 = getColor('blue')
  .map(helpers.removePoundSign)
  .fold(e => `error: has no color "${e}"`, color => color);
const c3r2 = getColor('green')
  .map(helpers.removePoundSign)
  .fold(e => `error: has color "${e}"`, color => color);

const fromNullable = x => x ? Right(x) : Left(null);
const getColor2 = name => fromNullable(colors[name]);
const c3r3 = getColor2('blue')
  .map(helpers.removePoundSign)
  .fold(e => `error: has color "${e}"`, color => color);
const c3r4 = getColor2('green')
  .map(helpers.removePoundSign)
  .fold(e => `error: has color "${e}"`, color => color);

log(c3r1);
log(c3r2);
log(c3r3);
log(c3r4);
