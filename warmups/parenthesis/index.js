parenthesis = (str) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      stack.push(str[i])
    } else if (str[i] == ")") {
      if (str.length == 0) return false;
      let char = stack.pop();
      if (char == undefined) return false;
    }
  }

  return stack.length == 0;
}

module.exports = parenthesis;