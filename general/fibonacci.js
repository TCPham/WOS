/* 
  Fibonacci
  Implement the Fibonacci function, a famous mathematical
  equation that generates a numerical sequence such that
  each number is the sum of the previous two.
  
  The Fibonacci numbers at index 0 and 1, coincidentally,
  have values of 0 and 1. Your function should accept an
  argument `idx` and return the Fibonacci number at that
  index.

  Examples:
  ​fibonacci(2)​ = 1
  fibonacci(3)​ = 2
  ​fibonacci(4)​ = 3
  ​fibonacci(5)​ = 5

  https://www.mathsisfun.com/numbers/fibonacci-sequence.html
  https://www.mathsisfun.com/numbers/golden-ratio.html

  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
   0  1  2  3  4  5  6  7   8   9
*/

/*
function fibonacci(idx) {
  const fib = [0, 1];
  for (let i = 2; i <= idx; i++) {
    // current value at current index
    let temp = fib[i - 1] + fib[i - 2];
    fib.push(temp);
  }
  console.log(fib);
  return fib[idx];
}
*/

/*
function fibonacci(idx) {
  const fib = [0, 1];
  // loop starts at index 2
  // create fib array to the size of idx
  for (let i = 2; i <= idx; i++) {
    // current value at current index
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[idx];
}

console.log(fibonacci(6));
*/

function fibonacci(idx) {
  if (idx < 2) {
    return idx;
  }
  return fibonacci(idx - 1) + fibonacci(idx - 2);
}
console.log(fibonacci(4));
