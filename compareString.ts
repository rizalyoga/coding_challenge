const compareString = (stringA: string, stringB: string): string => {
  let comparing: boolean = false;
  let result: string = "";

  if (stringA.length > stringB.length) {
    comparing = stringA.includes(stringB);
    result = stringB;
  } else {
    comparing = stringB.includes(stringA);
    result = stringA;
  }

  return comparing ? result : "NO SUBSTRING";
};

console.log(compareString("AKA", "AKASHI")); // AKA
console.log(compareString("KANGOORO", "KANG")); // KANG
console.log(compareString("KI", "KIJANG")); // KI
console.log(compareString("KUPU-KUPU", "KUPU")); // KUPU
console.log(compareString("ILALANG", "ILA")); // ILA
console.log(compareString("ILALANG", "AKA")); // NO SUBSTRING
