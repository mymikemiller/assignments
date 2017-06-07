var app = angular.module("MyApp", []);

app.controller("MainCtrl", ['$scope', function ($scope) {
    $scope.greet = function () {
        $scope.greeting = "hello, " + $scope.name;
    }

    $scope.allen = {
        name: 'Allen Woody',
        email: 'email@gmail.com'
    }
    $scope.bif = {
        name: 'Bif',
        email: 'iamfromthepast@gmail.com'
    }
}]);

app.directive("onEnter", function () { // camel case here, snake case in the html
    var link = function (scope, element, attrs) {
        element.on('keydown', function (e) {
            if (e.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.onEnter);
                });
                e.preventDefault();
            }
        });


    };
    return {
        restrict: 'A',
        link: link
    }

    /*return {
        restrict: 'CAE', // enable classes, attributes and elements.
        scope: {
            'contactInfo': '=myInfo'
        },
        template: '<span>{{contactInfo.name}} -- reach me at {{contactInfo.email}}</span>'
        //templateUrl: 'myPage.html'
    }*/
});
