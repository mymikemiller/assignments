angular.module("ReviewApp")

.controller("ContactsCtrl", ["$scope", "$routeParams", "ContactService", function($scope, $routeParams, ContactService) {
    
    $scope.type = $routeParams.contactType
    
    ContactService.getContacts().then(function(contacts) {
        $scope.contacts = contacts;
    });
    
}])