type ObjectsType = {
  [key: string]: number;
};

const publishValue = (arr: number[]): number => {
  let result: number = 0;

  let obj: ObjectsType = {};

  // initialization object key and value
  arr.forEach((value: number): void => {
    obj[value.toString()] = 0;
  });

  // count value appeared
  arr.forEach((val: number) => {
    Object.keys(obj).forEach((key: string): void => {
      if (val.toString() == key) {
        obj[val] += 1;
      }
    });
  });

  // count the values ​​that appear more than once
  Object.values(obj).forEach((val): void => {
    if ((val as number) > 1) result += 1;
  });

  return result;
};

console.log(publishValue([1, 2, 1, 2, 3, 4, 5, 5])); // 3
console.log(publishValue([1, 2, 3, 3, 4, 5])); // 1
