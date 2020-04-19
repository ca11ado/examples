import fs from 'fs';

const inspect = Symbol.for('nodejs.util.inspect.custom');

export const Box = (x) => ({
  map: func => Box(func(x)),
  fold: func => func(x),
  [inspect]: () => `Box(${x})`,
});

export const Left = x => ({
  map: f =>  Left(x),
  chain: f =>  Left(x),
  fold: (f, g) =>  f(x),
  [inspect]: () => `Left(${x})`,
});
export const Right = x => ({
  map: f => Right(f(x)),
  chain: f => f(x),
  fold: (f, g) => g(x),
  [inspect]: () => `Right(${x})`,
});

export const tryCatch = f => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};

/**
 * Semigroup. Type with "concat" method
 */
export const Sum = x => ({
  x,
  concat({ x: y }) {
    return Sum(x + y);
  },
  [inspect]: () => `Sum(${x})`,
});

Sum.empty = () => Sum(0);

export const List = arr => ({
  arr,
  fold: dflt => arr.reduce((acc, current) => acc.concat(current), dflt),
  foldMap: (f, dflt) => arr.reduce((acc, current) => acc.concat(f(current)), dflt),
});

List.of = (...arr) => List(arr);

export const getPort = fileName =>
  tryCatch(() => fs.readFileSync(fileName))
    .chain(str => tryCatch(() => JSON.parse(str)))
    .fold(e => 3000, config => config.port);
