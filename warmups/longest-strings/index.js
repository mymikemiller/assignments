let getLength = (arr, index) => {
  return arr[index].length + arr[index + 1].length + arr[index + 2].length;
}

let longestStrings = (arr) => {
  if (arr.length < 3) {
    throw new Error("input is too short")
  }

  let longestIndex = 0;
  let longestLength = 0;
  let combined = [];
  for (let i = 0; i < arr.length - 2; i++) {
    let length = getLength(arr, i);
    if (length >= longestLength) {

      longestIndex = i;
      longestLength = length;

      combined = [];
      combined.push(arr[longestIndex]);
      combined.push(arr[longestIndex + 1]);
      combined.push(arr[longestIndex + 2]);
    }

  }
  return combined;
}

module.exports = longestStrings;