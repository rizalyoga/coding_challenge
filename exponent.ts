const exponent = (x: number, n: number): number | string => {
  if (n < 0) {
    return "wrong input";
  } else if (n == 0) {
    return 1;
  }

  //   let result: number = 0;

  //   for (let i = 1; i < n; i++) {
  //     if (result == 0) {
  //       result = x * x;
  //     } else {
  //       result = result * x;
  //     }
  //   }

  //   return result;

  return x ** n;
};

console.log(exponent(2, 3)); //8
console.log(exponent(2, 12)); // 4096
console.log(exponent(7, 2)); // 49
console.log(exponent(9, 3)); // 729
console.log(exponent(22, 5)); // 5153632
console.log(exponent(1996, 0)); // 1
console.log(exponent(4213, -3)); // “wrong input”
