const isPalindrome = (text) => {
  text = text.toLowerCase();
  const isTextEvenLength = text.length % 2 ? false : true;
  const firstHalf = text.slice(0, text.length / 2);
  const secondHalf = text.slice(
    !isTextEvenLength ? text.length / 2 + 1 : text.length / 2,
    text.length
  );
  const reversedFirstHalf = firstHalf.split("").reverse().join("");
  return reversedFirstHalf == secondHalf;
};

console.log(`Racecar is a palindrome? ${isPalindrome("Racecar")}`);
console.log(`Technology is a palindrome? ${isPalindrome("Technology")}`);
console.log(`Eye is a palindrome? ${isPalindrome("eYe")}`);
