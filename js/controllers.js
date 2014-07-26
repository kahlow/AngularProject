var movieApp = angular.module('movieApp', ['ngGrid', 'restangular']);

movieApp.controller('MovieListCtrl', function ($scope, Restangular) {

    // Does a GET to /accounts
    // Returns an empty array by default. Once a value is returned from the server
    // that array is filled with those values. So you can use this in your template
    $scope.movies = Restangular.all('127.0.0.1:1337').getList().$object;









  // $scope.myData = [{
  //       name: 'Terminator 2',
  //       description: 'He\'s back.'
  //   },
  //   {
  //       name: 'Big Trouble in Little China',
  //       description: 'Don\'t mess with Jack Burton'
  //   },
  //   {
  //       name: 'Evil Dead',
  //       description: 'Boomstick'
  //   }];

  //   $scope.movies = { data : 'myData' };
});