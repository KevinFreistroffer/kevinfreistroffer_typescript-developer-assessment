export function sumOddNumbers(numbers: number[]): number {
  // Handle empty array or invalid input
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  // Filter odd numbers and reduce to sum
  return numbers
    .filter(num => Math.abs(num) % 2 === 1) // Handle negative numbers
    .reduce((sum, num) => sum + num, 0);
} 