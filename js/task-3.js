const findLongestWord = function(string) {
  const stringArray = string.split(' ');
  let LongestWord = '';

  for (let i = 0; i < stringArray.length; i += 1) {
    if (stringArray[i].length > LongestWord.length) {
      LongestWord = stringArray[i];
    }
  }

  return LongestWord;
};


console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'