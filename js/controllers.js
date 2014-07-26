var movieApp = angular.module('movieApp', ['ngRoute', 'ngGrid', 'restangular']);

movieApp.controller('MovieListCtrl', function ($scope, Restangular) {

    $scope.movies = Restangular.all('movies').getList().$object;

    console.log($scope.movies);

   
   // $scope.myData = [{
   //          name: 'Terminator 2',
   //          description: 'He\'s back.'
   //      },
   //      {
   //          name: 'Big Trouble in Little China',
   //          description: 'Don\'t mess with Jack Burton'
   //      },
   //      {
   //          name: 'Evil Dead',
   //          description: 'Boomstick'
   //      }];

   //      $scope.movies = { data : 'myData' };
    

   

    
});