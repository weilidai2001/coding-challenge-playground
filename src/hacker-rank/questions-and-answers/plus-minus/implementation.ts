/**
 * Calculates and prints the ratios of positive, negative, and zero elements in the array.
 * Each ratio is printed on a new line with exactly 6 decimal places.
 * 
 * @param arr - An array of integers to analyze
 * @returns void - This function doesn't return anything, it logs the results to the console
 * 
 * @example
 * ```
 * plusMinus([-4, 3, -9, 0, 4, 1]);
 * // Output:
 * // 0.500000
 * // 0.333333
 * // 0.166667
 * ```
 */
export function plusMinus(arr: number[]): void {
  const totalCount: number = arr.length;
  
  // Count positive, negative, and zero elements
  const positiveCount: number = arr.filter(num => num > 0).length;
  const negativeCount: number = arr.filter(num => num < 0).length;
  const zeroCount: number = totalCount - positiveCount - negativeCount;
  
  // Calculate ratios with 6 decimal precision
  const positiveRatio: string = (positiveCount / totalCount).toFixed(6);
  const negativeRatio: string = (negativeCount / totalCount).toFixed(6);
  const zeroRatio: string = (zeroCount / totalCount).toFixed(6);
  
  // Print results
  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}