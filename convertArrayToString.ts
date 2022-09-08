const convertArrayToString = (arr: string[]): string => {
  const stringOfArray: string = arr.join(" ");
  let newArr: string[] = [];

  for (let i = 0; i < stringOfArray.length; i++) {
    if (stringOfArray[i] != "@") {
      newArr.push(stringOfArray[i]);
    }
  }

  return newArr.join("");
};

console.log(
  convertArrayToString(["hal@lo", "ac@hm@ad", "rizal@", "yogas@wa@r@a@!"])
); // hallo achmad rizal yogaswara
