module.exports = (str) => {
  if (str.length === 0) throw new Error("String is empty")
  if (str.length % 2 === 1) throw new Error("String is not of even length");
  let middleStart = Math.floor(str.length / 2) - 1;
  let middle = str.substring(middleStart, middleStart + 2);
  return middle;
}