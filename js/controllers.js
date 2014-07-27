var movieApp = angular.module('movieApp', ['ngRoute', 'ngGrid', 'movieServices']);

movieApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
            templateUrl: 'partials/movie-list.html',
            controller: 'MovieListCtrl'
        }).
        when('/edit/:movieId', {
            templateUrl: 'partials/movie-detail.html',
            controller: 'MovieDetailCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);

movieApp.controller('MovieListCtrl', function ($scope, $location, movieListService) {

    // setting up the ability to get selected items from grid
    $scope.selectedMovie = [];
    
    $scope.myData = [];

    // GET request for movie list
    movieListService.getMovieList.then(function (movieList) {
        _.each(movieList, function (elem){
            $scope.myData.push(elem);
        });
    });
     
    // initialize the grid
    $scope.movies = { 
        data: 'myData', 
        columnDefs: [{field:'title', displayName:'Title'}, 
                    {field:'description', displayName:'Description'},
                    {field:'director', displayName:'Director'},
                    {field:'releaseYear', displayName:'Year Released'}],
        multiSelect: false,
        selectedItems: $scope.selectedMovie,
        afterSelectionChange: function() {
            $('.btn').prop('disabled', false);
        }
    };
   
    // I have a feeling there's a better way to handle this
    $scope.edit = function() {
        $location.url('/edit/' + $scope.selectedMovie[0].id);
    };
});

movieApp.controller('MovieDetailCtrl', function ($scope, $routeParams, $location, movieListService) {

    movieListService.getMovieList.then(function (movieList) {
        $scope.movie = _.find(movieList, function (m) { 
            return m.id == $routeParams.movieId;
        });
    });

    $scope.save = function(movie){
        console.log(movie);
    };

    $scope.cancel = function(){
        $location.url('/');
    };
});