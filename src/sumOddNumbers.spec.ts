import { sumOddNumbers } from './sumOddNumbers';

describe('sumOddNumbers', () => {
  it('should return the sum of odd numbers in an array', () => {
    expect(sumOddNumbers([1, 2, 3, 4, 5])).toBe(9);
  });

  it('should return 0 for an empty array', () => {
    expect(sumOddNumbers([])).toBe(0);
  });

  it('should handle negative numbers', () => {
    expect(sumOddNumbers([-1, -2, -3, 4, 5])).toBe(1);
  });

  it('should return 0 when there are no odd numbers', () => {
    expect(sumOddNumbers([2, 4, 6, 8, 10])).toBe(0);
  });

  it('should handle array with single odd number', () => {
    expect(sumOddNumbers([7])).toBe(7);
  });

  it('should handle decimal numbers', () => {
    expect(sumOddNumbers([1.5, 2, 3, 4.8])).toBe(3);
  });

  it('should handle array with zeros', () => {
    expect(sumOddNumbers([0, 1, 0, 3, 0])).toBe(4);
  });
}); 