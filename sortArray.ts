const sortArray = (arr: number[]): number[] => {
  const ascSort = arr.sort((a, b) => {
    return a - b;
  });

  return ascSort;
};

console.log(sortArray([4, 1, 6, 9, 7]));
