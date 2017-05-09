var cat = {
    name: "Jazz Hands",
    fur: "Brown",
    eyes: "Green",
    age: 6,
    toys: [
        {
            colors: ["white",
                         "blue"],
            tail: true,
            eyes: 2,
        },
        "string",
        "yarn",
        "laser pointer",
        ],
    siblings: [
        {
            name: "Teddy",
            fur: "Brown",
            eyes: "Blue",
            age: 10,
            toys: [
                {
                    colors: ["brown",
                         "white"],
                    tail: false,
                    eyes: 0
                },
                "feather",
                "feet",
                "shoe",
            ],
            speak: function () {
                console.log("bark");
            }
        }
        ],

    speak: function () {
        console.log("meow");
    }

}


console.log(cat.name);
console.log(cat.toys);
console.log(cat.toys[0].tail);

cat.speak();
cat.siblings[0].speak();
