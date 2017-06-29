let dict = {};

let addWord = (word, definition) => {
    word = word.toLowerCase();
    if (!dict.hasOwnProperty(word)) {
        dict[word] = definition;
        return true;
    } else {
        return false;
    }
}

let lookItUp = (word) => {
    return dict[word];
}

module.exports = {
    addWord,
    lookItUp
}