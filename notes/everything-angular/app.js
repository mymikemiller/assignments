angular.module("ReviewApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/:contactType", {
        templateUrl: "components/contacts/contacts.html",
        controller: "ContactsCtrl"
    })
//    .when("/personal", {
//        templateUrl: "components/personal/personal.html",
//        controller: "PersonalCtrl"
//    })
//    .when("/business", {
//        templateUrl: "components/business/business.html",
//        controller: "BusinessCtrl"
//    })
//    .when("/school", {
//        templateUrl: "components/school/school.html",
//        controller: "SchoolCtrl"
//    })
}])