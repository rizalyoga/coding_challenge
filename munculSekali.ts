type ObjectType = {
  [key: string]: number;
};

const munculSekali = (string: string): number[] => {
  let arrNumber: number[] = [];
  let obj: ObjectType = {};

  let result: number[] = [];

  for (let i = 0; i < string.length; i++) {
    arrNumber.push(Number(string[i]));
  }

  arrNumber.forEach((el: number): void => {
    obj[el as keyof typeof obj] = 0;
  });

  arrNumber.forEach((el: number): void => {
    Object.keys(obj).forEach((key: string) => {
      if (el.toString() === key) {
        obj[el as keyof typeof obj]! += 1;
      }
    });
  });

  Object.keys(obj).forEach((key: string): void => {
    if (obj[Number(key) as keyof typeof obj] === 1) {
      result.push(Number(key));
    }
  });

  return result;
};

console.log(munculSekali("1234123")); // [4]
console.log(munculSekali("76523752")); // [6, 3]
console.log(munculSekali("12345")); // [1 2 3 4 5]
console.log(munculSekali("1122334455")); // []
console.log(munculSekali("0872504")); // [8 7 2 5 4]
