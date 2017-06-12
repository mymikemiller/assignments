/*
 * Given an array of integers, return an array that
 * only includes the odds from the original array.
 * You must use Array.prototype.filter
 *
 * E.g. odds([1, 2, 3, 4, 5])  => [1, 3, 5]
 * */

function odds(nums) {
    return nums.filter(function (num) {
        return num % 2 == 1;
    });
}

console.log(odds([1, 2, 3, 4, 5]));


/*
 * An array is considered "lengthy" if it has more than 4 items.
 * Given an array of arrays, return a new array of only the short arrays
 * from the original array of arrays.
 *
 * E.g.
 var stuff = [
 [1, 42, true, "fizz"],
 [2, 41, false, "buzz", {}],
 [false],
 [10, 11, 12, 13, 14]
 ];

 result: [
 [ [ 1, 42, true, 'fizz' ], [ false ] ]
 * */

function shorts(arr) {
    return arr.filter(function (item) {
        return item.length <= 4;
    });
}

var stuff = [
    [1, 42, true, "fizz"],
    [2, 41, false, "buzz", {}],
    [false],
    [10, 11, 12, 13, 14]
];
console.log(shorts(stuff));