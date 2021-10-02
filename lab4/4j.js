const binarySearch = (num, arr, first = 0, last = arr.length) => {
  const middle = Math.floor((first + last) / 2);
  if (arr[middle] == num) {
    return middle;
  }
  if (arr[middle] > num) {
    return binarySearch(num, arr, first, middle - 1);
  }
  return binarySearch(num, arr, middle + 1, last);
};

console.log(
  `Binary search of 5 in [1,2,3,4,5,6,7,8,9,10]: ${binarySearch(
    5,
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  )}`
);
console.log(
  `Binary search of 1 in [1,2,3,4,5,6,7,8,9,10]: ${binarySearch(
    1,
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  )}`
);
console.log(
  `Binary search of 10 in [1,2,3,4,5,6,7,8,9,10]: ${binarySearch(
    10,
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  )}`
);
console.log(
  `Binary search of 7 in [1,2,3,4,5,6,7,8,9,10]: ${binarySearch(
    7,
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  )}`
);
