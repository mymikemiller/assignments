let arr = [];

for(let i = 1; i <= 10; i++) {
  let innerArr = [];
  for(let j = 1; j <= 10; j++) {
    innerArr.push(i*j);
  }
  arr.push(innerArr);
}

console.log(arr);
