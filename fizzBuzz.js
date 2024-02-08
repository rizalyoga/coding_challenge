const fizzBuzzFunction = (fizzValue, buzzValue) => {
  for (let i = 1; i <= 100; i++) {
    if (i % fizzValue == 0 && i % buzzValue == 0) {
      console.log("FizzBuzz");
    } else if (i % fizzValue == 0) {
      console.log("Fizz");
    } else if (i % buzzValue == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

// fizzBuzzFunction(3, 5);
fizzBuzzFunction(2, 10);
