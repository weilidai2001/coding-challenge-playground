import { diagonalDifference } from '../implementation';

describe('diagonalDifference function', () => {
  it('calculates the absolute difference correctly for 3x3 matrix', () => {
    const matrix = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12]
    ];
    expect(diagonalDifference(matrix)).toBe(15);
  });

  it('returns 0 for a matrix with equal diagonal sums', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    expect(diagonalDifference(matrix)).toBe(0);
  });

  it('handles 2x2 matrix correctly', () => {
    const matrix = [
      [1, 2],
      [3, 4]
    ];
    expect(diagonalDifference(matrix)).toBe(0); // |1+4 - (2+3)| = |5-5| = 0
  });

  it('handles 1x1 matrix correctly', () => {
    const matrix = [[5]];
    expect(diagonalDifference(matrix)).toBe(0); // Single element, both diagonals are the same
  });
});
