const Calculator = require('./calculator');

let calc;

beforeAll(() => {
  console.log('Creating new calculator');
  calc = new Calculator();
});

beforeEach(() => {});

afterAll(() => (calc = null));
afterEach(() => {});

test('1 + 1 = 2', () => {
  const sum = calc.add(1, 1);
  expect(sum).toBe(2);
});

test('2 + 3 = 5', () => {
  const sum = calc.add(2, 3);
  expect(sum).toBe(5);
});

test('0.1 + 0.2 = 0.3', () => {
  const sum = calc.add(0.1, 0.2);
  expect(sum).toBeCloseTo(0.3, 15);
});

test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3], [0.1, 0.2, 0.30000000000000004]])(
  '.add(%d, %d) === %d',
  (a, b, expected) => {
    const sum = calc.add(a, b);
    expect(sum).toBe(expected);
  }
);
