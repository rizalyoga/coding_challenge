const arr1 = [4, 6, 7, 4, 2, 14, 8, 7, 2];
const arr2 = [10, 8, 12, 11, 7, 2, 4, 8, 1];

let genap = [];
let ganjil = [];

const sortingArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      genap.push(array[i]);
    } else {
      ganjil.push(array[i]);
    }
  }

  const newArray = [
    ...genap.sort((a, b) => a - b),
    ...ganjil.sort((a, b) => a - b),
  ];

  console.log(newArray);
  console.log("index angka ganjil dimulai dari: ", genap.length);
};

sortingArray(arr1);
sortingArray(arr2);
