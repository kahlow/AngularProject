var movieApp = angular.module('movieApp', ['ngRoute', 'ngGrid', 'restangular']);

movieApp.controller('MovieListCtrl', function ($scope, Restangular) {

  

    Restangular.all('movies').getList().then(function(movieList) {
        //$scope.myData = movieList;
        console.log(movieList[0]);
        
    });



   

  $scope.myData = [{
        name: 'Terminator 2',
        description: 'He\'s back.'
    },
    {
        name: 'Big Trouble in Little China',
        description: 'Don\'t mess with Jack Burton'
    },
    {
        name: 'Evil Dead',
        description: 'Boomstick'
    }];

    $scope.movies = { data : 'myData' };
    
});