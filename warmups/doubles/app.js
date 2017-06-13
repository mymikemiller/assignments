/*
 * Given an array of integers, return an array containing the doubles
 * of each of the original integers.
 *
 * E.g. doubles([1, 2, 3, 4, 5])  => [2, 4, 6, 8, 10]
 * */

var doubles = function (arr) {
    return arr.map(function (item) {
        return item * 2;
    })
}


console.log(doubles([1, 2, 3, 4, 5]));

/*
 * Given an array of squared numbers, return an array of the
 * square roots of those numbers
 *
 * E.g. roots([4, 9, 16, 25, 36]) => [2, 3, 4, 5, 6]
 * */

var roots = function (arr) {
    return arr.map(function (item) {
        return Math.sqrt(item);
    })
}

console.log(roots([4, 9, 16, 25, 36]));

/*
 * Given an array of integers, return an array of doubled numbers of those
 * integers.
 *
 * E.g. seeingDouble([5, 7, 9, 11, 13]) => [55, 77, 99, 1111, 1313]
 * */

function seeingDouble(arr) {
    return arr.map(function (item) {
        return item.toString() + item.toString();
    })
}

console.log(seeingDouble([5, 7, 9, 11, 13]));

/*
 * Given an array of integers, return an array on integers
 * containing the mirrored image of those integers
 *
 * E.g. mirrored([9, 13, 14, 42]) => [99, 1111, 1331, 1441, 4224]
 * */

function mirrored(arr) {
    return arr.map(function (item) {
        return item + item.toString().split("").reverse().join("");
    })
}
console.log(mirrored([9, 13, 14, 42]));