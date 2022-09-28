const firstCharacterIsCapital = (string: string) => {
  const newArrayOfString: string[] = string.split("");

  const newArray: string[] = [];

  const convertCharacterToUpperCase = (char: string): void => {
    if (char === char.toLowerCase()) {
      const newChar = char.toUpperCase();
      newArray.push(newChar);
    } else {
      newArray.push(char);
    }
  };

  const convertCharacterToLowerCase = (char: string): void => {
    if (char === char.toUpperCase()) {
      const newChar = char.toLowerCase();
      newArray.push(newChar);
    } else {
      newArray.push(char);
    }
  };

  newArrayOfString.forEach((char, index) => {
    if (index < 1) {
      convertCharacterToUpperCase(char);
    } else {
      convertCharacterToLowerCase(char);
    }
  });

  return newArray.join("");
};

console.log(firstCharacterIsCapital("aku menjadi Yang Pertama"));
console.log(firstCharacterIsCapital("Aku Menjadi yang pertama"));
console.log(firstCharacterIsCapital("Aku menjadi yang pertama"));
