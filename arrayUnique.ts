const arrayUnique = (arrA: number[], arrB: number[]): number[] => {
  let uniqueNumberArr: number[] = [];

  arrA.forEach((number) => {
    if (!arrB.includes(number)) {
      uniqueNumberArr.push(number);
    }
  });

  return uniqueNumberArr;
};

console.log(arrayUnique([1, 2, 3, 4], [1, 3, 5, 10, 16])); //[2,4]
console.log(arrayUnique([1, 3, 7], [1, 3, 5])); //[7]
console.log(arrayUnique([3, 8], [2, 8])); //[3]
console.log(arrayUnique([10, 20, 30, 40], [5, 10, 15, 59])); //[20, 30, 40]
