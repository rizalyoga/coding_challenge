const anagram = (word: string, arrWords: string[]): string[] => {
  const arrResult: string[] = [];

  const charOfWord = word.split("").sort();

  arrWords.forEach((el) => {
    if (el.length == word.length) {
      const charOfel = el.split("").sort();
      let sameCharacter = 0;

      for (let i = 0; i < charOfWord.length; i++) {
        if (charOfWord[i] == charOfel[i]) {
          sameCharacter += 1;
        }
      }

      if (sameCharacter == charOfWord.length) {
        arrResult.push(el);
      }
    }
  });

  return arrResult;
};

console.log(anagram("tiri", ["lari", "irit", "iirt", "tori"]));
console.log(
  anagram("mangga", ["doktor", "angga", "ggmaan", "mangga", "aggnam"])
);
