const maxSum = (arr: number[], indexRange: number[][]): number => {
  let arrTotalSum: number[] = [];

  indexRange.forEach((range) => {
    const arrSlices: number[] = arr.slice(range[0], range[1] + 1);

    const sumResult: number = arrSlices.reduce(
      (prevValue: number, curentValue: number): number => {
        return prevValue + curentValue;
      }
    );

    arrTotalSum.push(sumResult);
  });

  return Math.max(...arrTotalSum);
};

const array: number[] = [1, -2, 3, 4, -5, -4, 3, 2, 1];
const ranges1: number[][] = [
  [1, 3],
  [0, 4],
  [6, 8],
];

const ranges2: number[][] = [[1, 3]];
const ranges3: number[][] = [
  [1, 4],
  [2, 5],
];
const ranges4: number[][] = [
  [2, 3],
  [6, 7],
];

console.log(maxSum(array, ranges1)); // 6
console.log(maxSum(array, ranges2)); // 5
console.log(maxSum(array, ranges3)); // 0
console.log(maxSum(array, ranges4)); // 7
