const bilanaganPrima = (angka: number): string => {
  let result: string = "YES";

  if (angka % 2 === 0) result = "NO";

  return result;
};

console.log(bilanaganPrima(7));
console.log(bilanaganPrima(10));
