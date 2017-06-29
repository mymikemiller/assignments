var practice = {
    compare: function (a, b) {
        var aString = a.toString();
        var bString = b.toString();
        aLastChar = aString.charAt(aString.length - 1);
        bLastChar = b.toString().charAt(bString.length - 1);
        return aLastChar === bLastChar;
    },

    withoutEnd: function (word) {
        return word.slice(1, word.length - 1);
    }
};

module.exports = practice;