"use strict";

//Task1
const sumTo = (n) => {
  if (n === 1) {
    return n;
  } else {
    return n + sumTo(n - 1);
  }
};

console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
