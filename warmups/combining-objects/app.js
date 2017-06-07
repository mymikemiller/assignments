/**
 * Created by mike on 6/6/17.
 */

var people = [
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 10
    },
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 30
    },
    {
        name: "Jane",
        email: "jane@gmail.com",
        numFriends: 200
    },
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 30
    }
]

var combine = function (people) {
    for (var i = 0; i < people.length; i++) {
        var person = people[i];
        for (var j = i + 1; j < people.length; j++) {
            if (i !== j) {
                var otherPerson = people[j];
                if (person.name == otherPerson.name && person.email == otherPerson.email && otherPerson !== person) {
                    person.numFriends += otherPerson.numFriends;
                    people.splice(j, 1);
                }
            }
        }
    }
    return people;
}
console.log(combine(people));