const recursiveFactorial = (n) => {
  //Base case
  if (n == 0) {
    return 1;
  }
  //Recursive case
  return recursiveFactorial(n - 1) * n;
};

function iterativeFactorial(n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
}

console.log("Factorial of 5 is:");
console.log(`recursiveFactorial ${recursiveFactorial(5)}`);
console.log(`iterativeFactorial ${iterativeFactorial(5)}`);
