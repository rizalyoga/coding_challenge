const printSum = (arr: number[]): string => {
  const string: string = arr.join("+");

  const sumTotal: number = arr.reduce((a: number, b: number) => a + b);

  return `${string} = ${sumTotal}`;
};

console.log(printSum([2, 3, 4, 5]));
