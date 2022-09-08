const findMinMax = (arr: number[]): string => {
  let min: number = 0;
  let indexOfMin: number = 0;

  let max: number = 0;
  let indexOfMax: number = 0;

  min = Math.min(...arr);
  indexOfMin = arr.indexOf(min);

  max = Math.max(...arr);
  indexOfMax = arr.indexOf(max);

  return `min : ${min} index : ${indexOfMin} | max : ${max} index : ${indexOfMax} `;
};

console.log(findMinMax([5, 7, 4, -2, -1, 8])); //min : -2 index : 3 | max : 8 index : 5
