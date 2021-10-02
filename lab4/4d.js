const alphabeticalLetters = (text) => {
  return text.toLowerCase().split("").sort().join("");
};

console.log(`cba in alphabetical order is ${alphabeticalLetters("cba")}`);
console.log(`abc in alphabetical order is ${alphabeticalLetters("abc")}`);
console.log(
  `webmaster in alphabetical order is ${alphabeticalLetters("Webmaster")}`
);
