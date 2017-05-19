function getFirstNonRepeated(str) {
    for (var i = 0; i < str.length - 1; i++) {
        if (str[i] !== str[i + 1]) {
            return str[i + 1];
        }
    }
    return "Failed to find a non-repeated character";
}

console.log(getFirstNonRepeated("ggggggggxkljfvlsjkfg"));
