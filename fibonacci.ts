const fibonacci = (number: number): number => {
  if (number <= 1) {
    return number;
  }

  let totalSum: number = 0;
  let tempNumA: number = 0;
  let tempNumB: number = 1;

  for (let i = 2; i <= number; i++) {
    totalSum = tempNumA + tempNumB;
    tempNumA = tempNumB;
    tempNumB = totalSum;
  }

  return totalSum;
};

console.log(fibonacci(0)); //0
console.log(fibonacci(2)); //1
console.log(fibonacci(3)); //2
console.log(fibonacci(5)); //5
console.log(fibonacci(9)); //34
console.log(fibonacci(10)); //55
console.log(fibonacci(12)); //144
