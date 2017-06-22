angular.module("Auth")

    .controller("LogoutCtrl", ["UserService", function (UserService) {
        UserService.logout();
    }]);