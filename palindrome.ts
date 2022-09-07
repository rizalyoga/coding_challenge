const palindrome = (kata: string): string => {
  const arrWord: string[] = [];

  for (let i = 0; i < kata.length; i++) {
    arrWord.push(kata[i]);
  }

  const palindromeWord: string = arrWord.reverse().join("");

  return palindromeWord === kata ? "YES" : "NO";
};

console.log(palindrome("katak"));
console.log(palindrome("bola"));
