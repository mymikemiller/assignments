var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

function prettyPrint(lyrics) {
    for (var i = 0; i < lyrics.length; i++) {
        process.stdout.write(lyrics[i] + " ");
    }
    console.log();
}

function printReversed(lyrics) {
    for (var i = lyrics.length - 1; i >= 0; i--) {
        process.stdout.write(lyrics[i] + " ");
    }
    console.log();
}

function printEveryOther(lyrics) {
    for (var i = 0; i < lyrics.length; i += 2) {
        process.stdout.write(lyrics[i] + " ");
    }
    console.log();
}

function printMixed(lyrics) {
    for (var i = 0; i < lyrics.length; i += 2) {
        process.stdout.write(lyrics[i + 1] + " " + lyrics[i] + " ");
    }
    console.log();
}



prettyPrint(lyrics);
printReversed(lyrics);
printEveryOther(lyrics);
printMixed(lyrics);
