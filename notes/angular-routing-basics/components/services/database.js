var app = angular.module("musicApp");

app.service("database", function () {
    this.data = [{
            name: "Sting",
            genre: "Rock",
            members: 4,
            _id: "aliwjepofip0239j09"
    }, {
            name: "Pink Floyd",
            genre: "Rock",
            members: 4,
            _id: "aoivep9898eoasjvoi"
    }, {
            name: "Led Zeplin",
            genre: "Rock",
            members: 4,
            _id: "aovweuoah8w48328o8"
    }, {
            name: "Funkadelic",
            genre: "Funk",
            members: 1000,
            _id: "1928jfwe8fjqowfi89"
    }, {
            name: "The Beatles",
            genre: "Rock",
            members: 4,
            _id: "aowiho83oaiwea8lwo"
    }, {
            name: "Pizza Steve and the Pizza Delivery Boys",
            genre: "Polka Punk Indie",
            members: 2,
            _id: "alviwneoi3oijo38op"
    }
    ];
})
