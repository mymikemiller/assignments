angular.module("ReviewApp")

.directive("contactCard", [function() {
    return {
        restrict: "E",
        replace: true,
        templateUrl: "components/directives/contact-card/contact-card.html",
        scope: {
            contact: "="
        },
        link: function(scope, elem, attrs) {
            elem.on("click", function() {
                elem.toggleClass("selected")
            });
        }
    }
}]);