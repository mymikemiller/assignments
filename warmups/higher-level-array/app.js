/*
 * Given an array of integers, return the product (multiplication) of
 * all the numbers in the array
 * */

function findProduct(arr) {
    return arr.reduce(function (prev, current) {
        return prev * current;
    })
}

//console.log(findProduct([5, 6, 2]));


var donors = [
    {name: "a", donation: 10},
    {name: "b", donation: 100},
    {name: "c", donation: 4},
    {name: "d", donation: 9000}
];

/*
 * Given an array of donor objects (name and donation amount), return the
 * total amount of donations
 * */

function donationAmount(arr) {
    return arr.reduce(function (prev, current) {
        return {donation: prev.donation + current.donation};
    }).donation;
}

//console.log(donationAmount(donors));


/*
 * Given an array of strings, return an object where the properties are one of the
 * strings, and the value is how many times that string appeared in the array
 *
 * E.g. var votes = ["angular", "react", "react"];
 *
 * countVotes(votes) => {angular: 1, react: 2}
 * */

var votes = ["angular", "react", "react", "angular", "react", "ember", "vanilla", "angular", "react", "meteor", "angular"];

function countVotes(arr) {
    return arr.reduce(function (prev, current) {
        if (!prev.hasOwnProperty(current)) {
            prev[current] = 0;
        }
        prev[current]++;
        return prev;
    }, {});
}

console.log(countVotes(votes));