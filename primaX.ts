const primaXTS = (number: number): number | string => {
  if (number < 1) return "number harus lebih dari 0 atau sama dengan 1";
  if (number == 1) return 2;

  let size: number = 50;
  let allNumbers: number[] = [];
  let arrOfPrimeNumber: number[] = [];

  for (let i = 1; i <= size; i++) {
    allNumbers.push(i);
  }

  arrOfPrimeNumber = allNumbers.filter((el) => {
    for (let i = 2; i < el; i++) {
      if (el % i === 0) {
        return false;
      }
    }
    return true;
  });

  return arrOfPrimeNumber[number];
};

console.log(primaXTS(1)); // 2
console.log(primaXTS(5)); // 11
console.log(primaXTS(8)); // 19
console.log(primaXTS(9)); // 23
console.log(primaXTS(10)); // 29
