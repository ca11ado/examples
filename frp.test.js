import { shapes, insidePolygon2, insidePolygon } from "./frp.js";

test('check shapes', () => {
  expect(shapes instanceof Array).toBe(true);
});

const outSidePolygonPos = [
    { x: 1, y: 1 },
    { x: 1, y: 197 },
    { x: 300, y: 200 },
    { x: 300, y: 1 },
    { x: 89, y: 133 },
    { x: 87, y: 87 },
    { x: 47, y: 108 },
    { x: 125, y: 105 },
    { x: 154, y: 116 },
    { x: 193, y: 131 },
    { x: 220, y: 86 },
    { x: 236, y: 91 },
    { x: 198, y: 61 },
];

const dogPos = [
  { x: 171, y: 62 },
  { x: 156, y: 83 },
  { x: 158, y: 118 },
  { x: 176, y: 104 },
  { x: 186, y: 129 },
  { x: 202, y: 127 },
  { x: 220, y: 80 },
  { x: 226, y: 111 },
  { x: 236, y: 116 },
  { x: 230, y: 64 },
  { x: 199, y: 65 },
];

const catPos = [
  { x: 67, y: 61 },
  { x: 50, y: 109 },
  { x: 80, y: 132 },
  { x: 99, y: 132 },
  { x: 122, y: 107 },
  { x: 107, y: 59 },
  { x: 86, y: 91 },
];

test('check all clicks were inside cat polygon', () => {
  const allInside = catPos.reduce((acc, pos) => {
    const isInside = insidePolygon(pos, shapes[0]);
    return (acc && isInside);
  }, true);
  expect(allInside).toBe(true);
});

test('check all clicks were inside dog polygon', () => {
  const allInside = dogPos.reduce((acc, pos) => {
    const isInside = insidePolygon(pos, shapes[1]);
    return (acc && isInside);
  }, true);
  expect(allInside).toBe(true);
});

test('check all clicks were outside cat polygon', () => {
  const allOutside = dogPos.concat(outSidePolygonPos).reduce((acc, pos) => {
    const isOutside = !insidePolygon(pos, shapes[0]);
    return (acc && isOutside);
  }, true);
  expect(allOutside).toBe(true);
});

test('check all clicks were outside dog polygon', () => {
  const allOutside = catPos.concat(outSidePolygonPos).reduce((acc, pos) => {
    const isOutside = !insidePolygon(pos, shapes[1]);
    return (acc && isOutside);
  }, true);
  expect(allOutside).toBe(true);
});



test('check all clicks were inside cat polygon', () => {
  const allInside = catPos.reduce((acc, pos) => {
    const isInside = insidePolygon2(pos, shapes[0]);
    return (acc && isInside);
  }, true);
  expect(allInside).toBe(true);
});

test('check all clicks were inside dog polygon', () => {
  const allInside = dogPos.reduce((acc, pos) => {
    const isInside = insidePolygon2(pos, shapes[1]);
    return (acc && isInside);
  }, true);
  expect(allInside).toBe(true);
});

test('check all clicks were outside cat polygon', () => {
  const allOutside = dogPos.concat(outSidePolygonPos).reduce((acc, pos) => {
    const isOutside = !insidePolygon2(pos, shapes[0]);
    return (acc && isOutside);
  }, true);
  expect(allOutside).toBe(true);
});

test('check all clicks were outside dog polygon', () => {
  const allOutside = catPos.concat(outSidePolygonPos).reduce((acc, pos) => {
    const isOutside = !insidePolygon2(pos, shapes[1]);
    return (acc && isOutside);
  }, true);
  expect(allOutside).toBe(true);
});


