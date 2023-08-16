const palindromes = function (input) {
//remove punctuation, spaces, caps
  let s = input.toLowerCase().split("");
  s = s.filter(c => !punctuation.includes(c));
  let original = s.join("");
  let reversed = s.reverse().join("");
  return reversed === original
};

const punctuation = [',',' ','.','!'];

// Do not edit below this line
module.exports = palindromes;
