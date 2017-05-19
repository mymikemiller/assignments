var validGrid = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]]

var invalidGrid = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 6, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]]

function isValidSudoku(grid) {
    // Check rows
    for (var i = 0; i < 9; i++) {
        var isValid = isValidGroup(grid[i]);
        if (!isValid) {
            return false;
        }
    }

    // Check columns
    for (var j = 0; j < 9; j++) {
        var column = [];
        for (var i = 0; i < 9; i++) {
            column.push(grid[i][j]);
        }

        var isValid = isValidGroup(column);
        if (!isValid) {
            return false;
        }
    }

    // Check 3x3 squares
    for (xAdd = 0; xAdd < 3; xAdd++) {
        for (yAdd = 0; yAdd < 3; yAdd++) {
            var group = [];
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    group.push(grid[i + (xAdd * 3)][j + (yAdd * 3)]);
                }
            }

            var isValid = isValidGroup(group);
            if (!isValid) {
                return false;
            }
        }
    }

    return true;
}

function isValidGroup(array) {
    var sorted = array.concat().sort();
    var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return JSON.stringify(sorted) === JSON.stringify(expected);
}

console.log(isValidSudoku(validGrid));
console.log(isValidSudoku(invalidGrid));
