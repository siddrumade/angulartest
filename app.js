var app=angular.module('myApp',['ngRoute']);
//confiigure app to navigate to diff pages
app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl : 'pages/first.html',
        controller : 'FirstController'
    })
    .when('/second',{
        templateUrl: 'pages/second.html',
        controller: 'SecondController'
    })
    .otherwise({
        redirectTo:'/'
    });

});

//build controller for each page
app.controller('FirstController',function ($scope){
$scope.message='first';
});
app.controller('SecondController',function ($scope){
    $scope.message='second';
    });