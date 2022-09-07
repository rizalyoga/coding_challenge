const fullPrima = (numb: number): String => {
  if (numb === 1) return `${numb} = Bukan bilangan prima`;
  if (numb === 2) return `${numb} = Bilangan Prima`;

  let prima: string[] = [];

  const stringNumber: string = numb.toString();

  for (let i = 0; i < stringNumber.length; i++) {
    if (Number(stringNumber[i]) % 2 != 0 || Number(stringNumber[i]) == 2) {
      prima.push(stringNumber[i]);
    }
  }

  if (prima.length == stringNumber.length) {
    return `${numb} = Bilangan Prima`;
  } else {
    return `${numb} = Bukan bilangan prima`;
  }
};

// console.log(fullPrima(12));
console.log(fullPrima(7)); // YA
console.log(fullPrima(9)); // YA
console.log(fullPrima(11)); // YA
console.log(fullPrima(4)); // TIDAK
console.log(fullPrima(97)); // YA
console.log(fullPrima(34)); // TIDAK
console.log(fullPrima(449)); // TIDAK
console.log(fullPrima(1)); // TIDAK
console.log(fullPrima(22)); // YA
