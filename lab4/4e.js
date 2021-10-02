const longestWordInString = (text) => {
  const words = text.split(" ");
  let maxWordCount = words[0].length;
  let maxWordIndex = 0;
  for (let i = 0; i < words.length; i++) {
    const currWordCount = words[i].length;
    if (currWordCount > maxWordCount) {
      maxWordCount = currWordCount;
      maxWordIndex = i;
    }
  }
  return words[maxWordIndex];
};

console.log(
  `The longest word in this sentence is: ${longestWordInString(
    "The longest word in this sentence is"
  )}`
);
console.log(
  `The longest word in the sentence: a ab abc abcd abcde : ${longestWordInString(
    "a ab abc abcd abcde"
  )}`
);
