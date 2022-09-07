const pairSum = (arr: number[], target: number): number[] => {
  let indexOfNumber: number[] = [];

  arr.forEach((el) => {
    arr.forEach((el2) => {
      if (el + el2 == target) {
        indexOfNumber.push(arr.indexOf(el));
        indexOfNumber.push(arr.indexOf(el2));
      }
    });
  });

  return indexOfNumber.slice(0, 2);
};

console.log(pairSum([1, 2, 3, 4, 6], 6)); // [1, 3]
console.log(pairSum([2, 5, 9, 11], 11)); // [0, 2]
console.log(pairSum([1, 3, 5, 7], 12)); // [2, 3]
console.log(pairSum([1, 4, 6, 8], 10)); // [1, 2]
console.log(pairSum([1, 5, 6, 7], 6)); // [0, 1]
console.log(pairSum([0, 0, 0, 7], 7)); // [0,3]
