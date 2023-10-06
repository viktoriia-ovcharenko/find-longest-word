function findLongestWord(sentence) {
  const words = sentence.replace(/[^a-zA-Z\s]/g, '').split(' ');
  let longestWord = '';
  let maxVowels = 0;

  for (const word of words) {
    const wordLength = word.length;
    const vowelCount = (word.match(/[aeiouAEIOU]/g) || []).length;

    if (wordLength > longestWord.length || (wordLength === longestWord.length && vowelCount > maxVowels)) {
      longestWord = word;
      maxVowels = vowelCount;
    }
  }

  return longestWord;
}

const sentence = 'Sdfg hdfshg fdgs h khgsdghdg lk';

console.log('longest word: ', findLongestWord(sentence));
