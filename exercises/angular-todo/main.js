var app = angular.module("todoApp", []);

var url = "https://api.vschool.io/mike/todo/";



app.controller("TodoController", ["$scope", "TodoService", function ($scope, TodoService) {
    $scope.todos = [];

    // Define and execute at once (IIFE)
    (function getTodos() {
        TodoService.getTodos().then(function (serviceResponse) {
            $scope.todos = serviceResponse;
        });
    })();

    $scope.clickSubmit = function (data) {

        TodoService.postTodo(data).then(function (serviceResponse) {
            $scope.todos.push(serviceResponse);
        });
    }

    $scope.clickDelete = function (todo) {
        var id = todo._id;

        TodoService.deleteTodo(id).then(function (serviceResponse) {
            getTodos();
        });
    }

    $scope.onCompletedChange = function (todo) {
        var id = todo._id;

        TodoService.updateTodo(id, todo).then(function (serviceResponse) {
            getTodos();
        });
    }

}]);


app.service("TodoService", function ($http) {
    this.getTodos = function () {
        return $http.get(url).then(
            function (serverResponse) {
                return serverResponse.data;
            },
            function (serverResponse) {
                return serverResponse;
            });
    };

    this.postTodo = function (data) {
        return $http.post(url, data).then(
            function (serverResponse) {
                return serverResponse.data;
            },
            function (serverResponse) {
                return serverResponse.statusText;
            });
    }

    this.deleteTodo = function (id) {
        finalUrl = url + id
        return $http.delete(finalUrl).then(
            function (serverResponse) {
                return serverResponse.data;
            },
            function (serverResponse) {
                return serverResponse.statusText;
            });
    }

    this.updateTodo = function (id, data) {
        var finalUrl = url + id;
        return $http.put(finalUrl, data).then(
            function (serverResponse) {
                return serverResponse.data;
            },
            function (serverResponse) {
                return serverResponse.statusText;
            });
    }
})
