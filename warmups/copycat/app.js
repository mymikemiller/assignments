function copyCat(obj) {
    var newObj = {};
    for (key in obj) {
        console.log()
        newObj[key] = obj[key];
    }
    return newObj;
}

console.log(copyCat({hello: "there", im: "good", how: "you", embedded: {yes: "it"}}))