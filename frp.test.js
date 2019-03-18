import { shapes, insidePolygon } from "./frp.js";

test('check shapes', () => {
  expect(shapes instanceof Array).toBe(true);
});

test('check function', () => {
  expect(insidePolygon instanceof Function).toBe(true);
});

test('check click was inside cat polygon', () => {
  const pos = { x: 56, y: 89 };
  expect(insidePolygon(pos, shapes[0])).toBe(true);
});

