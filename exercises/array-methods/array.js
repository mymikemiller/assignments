var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
var food = [];

function print() {
    console.log("---");
    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);
    console.log("food: ", food);
    console.log("---");
}

print();

vegetables.pop();
fruit.splice(0, 1);

print();

fruit.push(fruit.indexOf('orange'));
print();
var vegLength = vegetables.length;
console.log(vegLength);
vegetables.push(vegLength);
print();
food = fruit.concat(vegetables);
console.log(food);
print();
food.splice(4, 2);
console.log(food);
food.reverse();
console.log(food.toString());
