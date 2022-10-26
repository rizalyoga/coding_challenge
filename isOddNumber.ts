const isOddNumber = (numb: number): number | string => {
  if (numb % 2 === 1) {
    return Math.floor(numb / 2);
  }

  return "Input is even number";
};

console.log(isOddNumber(7)); // 3
console.log(isOddNumber(15)); // 7
console.log(isOddNumber(16)); // input is even number
