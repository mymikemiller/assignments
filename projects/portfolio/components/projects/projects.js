var app = angular.module("portfolioApp");

app.controller("ProjectsCtrl", ["$scope", function ($scope) {
    $scope.projects = [
        {
            title: "Chomply",
            images: ["components/images/chomply.webp", ,
                "components/images/chomply2.webp",
                "components/images/chomply3.webp"],
            download: "https://play.google.com/store/apps/details?id=com.mikemiller.chomply",
            github: "https://github.com/mymikemiller/Chomply",
            shortDescription: "Sort a restaurant's menu",
            description: "Chomply is an Android app that lets you pull up the menu of a restaurant and sort the items based on one of a number of criteria, such as carbs, fat or WeightWatchers score. It was programmed in Java using Android Studio."
        },
        {
            title: "TongueTimed",
            images: ["components/images/tonguetimed.webp",
                "components/images/tonguetimed2.webp"],
            download: "https://play.google.com/store/apps/details?id=com.mikemiller.tonguetimed",
            github: "https://github.com/mymikemiller/TongueTimed",
            shortDescription: "Practice foreign language vocab",
            description: "TongueTimed is an Android app that allows you to input a list of vocab words then quizzes you using the phone's built-in text-to-speech engine. It uses the Graduated Interval Recall (GIR) method to space out the prompts for maximum retention. It was programmed in C# for Xamarin, so it could easily be ported to iOS. It can be downloaded in the Android Play Store."
        },
        {
            title: "SuperDoku",
            images: ["components/images/superdoku.jpeg",
                "components/images/superdoku2.jpeg"],
            github: "https://superdoku-ppc.en.softonic.com/pocketpc",
            shortDescription: "Sudoku app for windows mobile",
            description: "SuperDoku is a graphical Sudoku game for Windows Mobile (Pocket PC), SmartPhone and PC written in C# for the .NET Compact Framework. Instead of using just numbers, SuperDoku enables you to use images. The user can easily create their own skin, or download from a collection of user-uploaded skins."
        }
    ];
}]);

app.directive("project", function () {
    return {
        restrict: "E",
        templateUrl: "components/projects/project.html",
        scope: {
            project: "="
        }
    }
});