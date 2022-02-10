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

//Task2
function findShort(str) {
  return str
    .split(" ")
    .reduce((word, current) => (word.length > current.length ? current : word));
}

const sentance = "Lorem ipsum dolor sit amet";

console.log(findShort(sentance));
console.log(findShort("Hello world"));
console.log(findShort("Hi"));
console.log(findShort("She is David's sister"));
