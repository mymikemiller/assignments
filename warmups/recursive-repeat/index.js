
let wtf = function (num) {
  if (num < 0) throw new Error("Number should be positive");
  if (num == 0) return "";
  if (num == 1) return "wtf";
  return wtf(num - 1) + "wtf";
}

module.exports = wtf;