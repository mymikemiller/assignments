let matchingWords = (str) => {
  let words = str.split(" ");
  let matchingWords = [];
  words.forEach(function(word, i) {
    for(let x = i + 1; x < words.length; x++) {
      if (words[i] == words[x]) {
        if (!matchingWords.includes(words[i])) {
          matchingWords.push(words[i]);
        }
      };
    }
  })
  return matchingWords;
}

let riddle = "Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas."
let answer = matchingWords(riddle);
console.log(answer);

module.exports = matchingWords;
