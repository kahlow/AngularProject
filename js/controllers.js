var movieApp = angular.module('movieApp', ['ngGrid']);

movieApp.controller('MovieListCtrl', function ($scope) {
  $scope.myData = [{
        name: 'Terminator 2',
        description: 'He\'s back.'
    },
    {
        name: 'Big Trouble in Little China',
        description: 'Don\'t mess with Jack Burton'
    }];

    $scope.movies = { data : 'myData' };
});