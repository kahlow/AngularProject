var movieApp = angular.module('movieApp', ['ngRoute', 'ngGrid', 'restangular']);

movieApp.controller('MovieListCtrl', function ($scope, Restangular) {

    // GET request for movie list
    $scope.movieList = Restangular.all('movies').getList().$object;

    // setting up the ability to get selected items from grid
    $scope.selectedMovie = [];

    // initialize the grid
    $scope.movies = { 
        data: 'movieList', 
        columnDefs: [{field:'name', displayName:'Name'}, 
                    {field:'description', displayName:'Description'},
                    {field:'director', displayName:'Director'},
                    {field:'releaseYear', displayName:'Year Released'}],
        multiSelect: false,
        selectedItems: $scope.selectedMovie,
        afterSelectionChange: function() {
            $('.btn').prop('disabled', false);
        }
    };

    // edit button click event
    $scope.edit = function(){
        console.log($scope.selectedMovie[0]);    
    };
});