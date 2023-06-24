const getMiddleCharacter = (word: string): string => {
  const length: number = word.length;
  const middleIndex: number = Math.floor(length / 2);

  if (length % 2 === 0) {
    // kata genap
    return word.slice(middleIndex - 1, middleIndex + 1);
  } else {
    // kata ganjil
    return word.charAt(middleIndex);
  }
};

console.log(getMiddleCharacter("saya")); // Output: "ay"
console.log(getMiddleCharacter("rizalyoga")); // Output: "l"
console.log(getMiddleCharacter("rizal")); // Output: "z"
console.log(getMiddleCharacter("TypeScript")); // Output: "Sc"
