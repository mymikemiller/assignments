var myName = "John Doe";

try {
    consle.log(name);
} catch (err) {
    console.log(err);
}
function movieCheck(age) {
    if (age < 0) {
        throw "Error cannot be less than 0";
    } else if (age <= 12) {
        console.log("You can see PG movies");
    } else if (age >= 13 && age < 18) {
        console.log("You can see PG-13 movies");
    } else if (age >= 18) {
        console.log("You can see R rated movies");
    }
}

try {
    movieCheck(-1);
} catch (err) {
    console.log(err);
}