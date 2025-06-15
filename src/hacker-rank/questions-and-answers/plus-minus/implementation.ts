 /**
 * Calculates the absolute difference between the sums of a square matrix's diagonals
 * @param arr A 2D array representing a square matrix of numbers
 * @returns The absolute difference between the sums of the matrix's two diagonals
 */
export function diagonalDifference(arr: number[][]): number {
  const n = arr.length;
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  for (let i = 0; i < n; i++) {
    // Primary diagonal: row index equals column index (0,0), (1,1), etc.
    primaryDiagonalSum += arr[i][i];
    
    // Secondary diagonal: column index is (n - 1 - row index)
    secondaryDiagonalSum += arr[i][n - 1 - i];
  }

  // Return the absolute difference
  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}