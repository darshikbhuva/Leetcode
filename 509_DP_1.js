let n = 2;

// Top-down approach
// Memorization
// Time complexity : 2**n

function fib(n) {
  let store = {};

  if (n <= 1) {
    return n;
  }

  if (!store[n]) {
    store[n] = fib(n - 1) + fib(n - 2);
  }

  return store[n];
}

console.log(fib(n));
