type TypeForObjectCharacter = {
  [key: string]: number;
};

const firstNotRepeatingChar = (term: string): string => {
  const obj: TypeForObjectCharacter = {};
  const arrOfTerm: string[] = term.split("");

  arrOfTerm.forEach((char) => {
    obj[char] = 0;
  });

  arrOfTerm.forEach((char) => {
    Object.keys(obj).forEach((key) => {
      if (char == key) {
        obj[char] += 1;
      }
    });
  });

  const arrSingleShow: string[] = [];

  Object.keys(obj).forEach((key) => {
    obj[key] == 1 ? arrSingleShow.push(key) : "";
  });

  return arrSingleShow[0];
};

console.log(firstNotRepeatingChar("aaabccddddeffg"));
