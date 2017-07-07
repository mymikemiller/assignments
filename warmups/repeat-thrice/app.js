// return true if no int in the array repeats 3 times in a row

let noRepeatThrice = (arr) => {
  let repeats = 1;
  let lastNum = null;
  for (let i = 1; i < arr.length; i++) {
    lastNum = arr[i - 1];
    if (lastNum === arr[i]) {
      repeats++;
      if (repeats === 2) {
        return false;
      }
    }
  }
  return true;
}

console.log(noRepeatThrice([1, 2, 3, 4, 5]));
console.log(noRepeatThrice([1, 2, 2, 2, 3, 4, 5]));