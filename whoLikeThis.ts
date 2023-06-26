const whoLikeThis = (array: string[]): string => {
  if (array.length == 1) {
    return `${array[0]} like this`;
  } else if (array.length == 2) {
    return `${array[0]} and ${array[1]} like this.`;
  } else if (array.length == 3) {
    return `${array[0]},${array[1]} and ${array[2]} like this.`;
  } else if (array.length > 3) {
    return `${array[0]}, ${array[1]} and ${
      array.slice(2).length
    } other like this.`;
  } else {
    return "No one like this";
  }
};

console.log(whoLikeThis([]));
console.log(whoLikeThis(["yoga"]));
console.log(whoLikeThis(["yoga", "toni"]));
console.log(whoLikeThis(["yoga", "toni", "Deni"]));
console.log(whoLikeThis(["yoga", "toni", "Deni", "Tomo"]));
