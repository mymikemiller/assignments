angular.module("ReviewApp")

.directive("navbar", [function() {
    
    return {
        restrict: "E",
        templateUrl: "components/directives/navbar/navbar.html",
        replace: true
    }
}]);