const secondLowestSecondHighest = (arr) => {
  if (arr.length == 1) {
    return [arr[0], arr[0]];
  }
  arr = arr.sort();
  if (arr.length == 2) {
    return [arr[0], arr[1]];
  }
  return [arr[1], arr[arr.length - 2]];
};

console.log(
  `The second lowest and second higher numbers of [1,2,3,4,5] are: ${secondLowestSecondHighest(
    [1, 2, 3, 4, 5]
  )}`
);

console.log(
  `The second lowest and second higher numbers of [1,2] are: ${secondLowestSecondHighest(
    [1, 2]
  )}`
);
