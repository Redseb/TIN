const isPrime = (n) => {
  if (n <= 1 || (n % 2 == 0 && n > 2)) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

console.log(`121 is prime? ${isPrime(121)}`);
console.log(`2 is prime? ${isPrime(2)}`);
