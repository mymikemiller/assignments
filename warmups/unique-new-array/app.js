function findUniques(arr1, arr2) {
    var result = arr1.concat(arr2).sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < result.length - 1; i++) {
        if (result[i] == result[i + 1]) {
            console.log(result);
            var lastIndex = result.lastIndexOf(result[i]);

            var count = lastIndex - i;
            var first = result.slice(0, i + 1);
            var second = result.slice(i + 2, result.length);
            result = first.concat(second);
        }
    }

    return result;
}

console.log(findUniques([1, 2, 5], [1, 2, 8, 9, 10])); // [5, 8, 9, 10]
