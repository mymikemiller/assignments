var app = angular.module("TodoApp", []);



app.controller("TodoController", ["$scope", "httpService", function ($scope, httpService) {
    angular.element(document).ready(function () {
        $scope.getTodos();
    });

    $scope.todos = [];
    $scope.getTodos = function () {
        httpService.getRequest('https://api.vschool.io/mike/todo').then(function (serviceResponse) {
            $scope.todos = serviceResponse;
        });
    }

    $scope.clickSubmit = function (data) {

        httpService.postRequest('https://api.vschool.io/mike/todo', data).then(function (serviceResponse) {


            $scope.todos.push(serviceResponse);
        });
    }

    $scope.clickDelete = function (todo) {
        var id = todo._id;

        httpService.deleteRequest('https://api.vschool.io/mike/todo/' + id).then(function (serviceResponse) {
            $scope.getTodos();
            //$scope.todos.push(serviceResponse);
            //var index = $scope.todos.indexOf(serviceResponse);
            //alert(index);
            //$scope.todos.splice(index, 1);
        });
    }

}]);


app.service("httpService", function ($http) {
    this.getRequest = function (url) {
        return $http.get(url).then(
            function (serverResponse) {
                return serverResponse.data;
            },
            function (serverResponse) {
                return serverResponse;
            });
    };

    this.postRequest = function (url, data) {
        return $http.post(url, data).then(
            function (serverResponse) {
                return serverResponse.data;
            },
            function (serverResponse) {
                return serverResponse.statusText;
            });
    }

    this.deleteRequest = function (url) {
        return $http.delete(url).then(
            function (serverResponse) {
                return serverResponse.data;
            },
            function (serverResponse) {
                return serverResponse.statusText;
            });
    }
})
