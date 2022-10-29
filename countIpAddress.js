/* 
Write a function that accepts a starting and ending IPv4 address, and returns the number of IP addresses from start to end, excluding the end IP address. All input to the ipsBetween function will be valid IPv4 addresses in the form of strings. The ending address will be at least one address higher than the starting address.

Examples:

ipsBetween("10.0.0.0", "10.0.0.50") => returns 50
ipsBetween("10.0.0.0", "10.0.1.0") => returns 256
ipsBetween("20.0.0.10", "20.0.1.0") => returns 246
*/

const ipToInt32 = (ip) => {
  return parseInt(
    ip
      .split(".")
      .map(function (v) {
        const bin = parseInt(v).toString(2);
        return new Array(9 - bin.length).join("0") + bin;
      })
      .join(""),
    2
  );
};

const ipsBetween = (start, end) => {
  return ipToInt32(end) - ipToInt32(start);
};

// function ipsBetween(start, end) {
//   const num = (ip) =>
//     ip
//       .split(".")
//       .map((x) => parseInt(x))
//       .reduce((acc, e) => acc * 256 + e);

//   return num(end) - num(start);
// }

console.log(ipsBetween("10.0.0.0", "10.0.0.50")); //50
console.log(ipsBetween("10.0.0.0", "10.0.1.0")); //256
console.log(ipsBetween("20.0.0.10", "20.0.1.0")); //246
console.log(ipsBetween("10.11.12.13", "10.11.13.0")); // 243
console.log(ipsBetween("160.0.0.0", "160.0.1.0")); //256
console.log(ipsBetween("170.0.0.0", "170.1.0.0")); //65536
console.log(ipsBetween("50.0.0.0", "50.1.1.1")); //65793
