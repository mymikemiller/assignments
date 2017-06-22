angular.module("Auth", ["ngRoute", "ngStorage"])

    .config(["$routeProvider", "$httpProvider", function ($routeProvider, $httpProvider) {
        $routeProvider
            .when("/signup", {
                templateUrl: "components/auth/signup/signup.html",
                controller: "SignupCtrl"
            })
            .when("/login", {
                templateUrl: "components/auth/login/login.html",
                controller: "LoginCtrl"
            })
            .when("/logout", {
                template: "",
                controller: "LogoutCtrl"
            });

        $httpProvider.interceptors.push("AuthInterceptor");
    }])

    .service("UserService", ["$http", "TokenService", "$location", function ($http, TokenService, $location) {
        this.signup = function (user) {
            return $http.post("/auth/signup", user);
        };

        this.login = function (user) {
            return $http.post("/auth/login", user).then(function (response) {
                TokenService.setToken(response.data.token);
                return response;
            })
        };

        this.logout = function () {
            TokenService.removeToken();
            $location.path("/");
        };
    }])

    .service("TokenService", ["$localStorage", function ($localStorage) {
        this.setToken = function (token) {
            $localStorage.token = token;
        };

        this.getToken = function () {
            return $localStorage.token;
        }

        this.removeToken = function () {
            delete $localStorage.token;
        }
    }])

    .service("AuthInterceptor", ["$q", "TokenService", "$location", function ($q, TokenService, $location) {
        this.request = function (config) {
            var token = TokenService.getToken();
            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = "Bearer " + token;
            }
            return config;
        };

        this.responseError = function (response) {
            if (response.status === 401) {
                TokenService.removeToken();
                $location.path("/login");
            }

            return $q.reject(response);
        }

    }]);