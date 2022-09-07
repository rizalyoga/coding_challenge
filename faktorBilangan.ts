const faktorBilangan = (nilai: number): void => {
  let arrNumber: number[] = [];

  for (let i = 1; i <= nilai; i++) {
    if (nilai % i == 0) {
      arrNumber.push(i);
    }
  }

  arrNumber.forEach((el: number): void => console.log(el));

  console.log("=====reverse=====");

  arrNumber.reverse().forEach((el: number): void => console.log(el));
};

console.log(faktorBilangan(6)); // 1,2,3,6
console.log(faktorBilangan(20)); // 1,2,4,5,10,20
