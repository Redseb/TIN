const moneyToCoins = (money, coins) => {
  coins = coins.sort((a, b) => a - b).reverse();
  console.log(coins);
  let returnedCoins = [];
  for (let i = 0; i < coins.length; i++) {
    while (money >= coins[i]) {
      returnedCoins.push(coins[i]);
      money -= coins[i];
    }
  }

  return returnedCoins;
};

console.log(
  `Money to coins for moneyToCoins(46, [25, 10, 5, 2, 1]) is: ${moneyToCoins(
    46,
    [25, 10, 5, 2, 1]
  )}`
);
