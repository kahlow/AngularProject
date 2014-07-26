var movieApp = angular.module('movieApp', ['ngRoute', 'ngGrid', 'restangular']);

movieApp.controller('MovieListCtrl', function ($scope, Restangular) {

    $scope.movieList = Restangular.all('movies').getList().$object;

    $scope.movies = { 
        data: 'movieList', 
        columnDefs: [{field:'name', displayName:'Name'}, 
                    {field:'description', displayName:'Description'},
                    {field:'director', displayName:'Director'},
                    {field:'releaseYear', displayName:'Year Released'}],
        multiSelect: false
    };
});