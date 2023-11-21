const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test.skip('can add two large positive numbers', () => { 
    const expected = 2000000000; // Adjust the expected value based on your needs
    const actual = sum(1000000000, 1000000000);
    expect(actual).toBe(expected);
  });

  test.skip('can add two negative numbers', () => {
    const expected = -5;
    const actual = sum(-2, -3);
    expect(actual).toBe(expected);
  });

  test.skip('can add zero', () => {
    const expected = 10;
    const actual = sum(10, 0);
    expect(actual).toBe(expected);
  });
});

describe('subtract', () => {
  test('can subtract two numbers', () => {
    const expected = 2;
    const actual = subtract(5, 3);
    expect(actual).toBe(expected);
  });
});

describe('multiply', () => {
  test('can multiply two numbers', () => {
    const expected = 15;
    const actual = multiply(5, 3);
    expect(actual).toBe(expected);
  });
});

describe('divide', () => {
  test('can divide two numbers', () => {
    const expected = 5;
    const actual = divide(15, 3);
    expect(actual).toBe(expected);
  });
});

describe('modulus', () => {
  test('can calculate modulus of two numbers', () => {
    const expected = 2;
    const actual = modulus(5, 3);
    expect(actual).toBe(expected);
  });
});

describe('even', () => {
  test('returns true for an even number', () => {
    const actual = even(4);
    expect(actual).toBe(true);
  });
});

describe('odd', () => {
  test('returns true for an odd number', () => {
    const actual = odd(3);
    expect(actual).toBe(true);
  });
});
