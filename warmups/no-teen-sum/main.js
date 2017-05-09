function fixTeen(num) {
    if ((num >= 13 && num < 15) || (num > 16 && num <= 19)) {
        return 0;
    }
    return num;
}

function noTeenSum(a, b, c) {
    return fixTeen(a) + fixTeen(b) + fixTeen(c);
}


console.log(noTeenSum(1, 2, 3)) //→ 6
console.log(noTeenSum(2, 13, 1)) //→ 3
console.log(noTeenSum(2, 1, 14)) //→ 3
console.log(noTeenSum(2, 15, 14)) //→ 17
