var movieApp = angular.module('movieApp', ['ngRoute', 'ngGrid', 'restangular']);

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

movieApp.controller('MovieListCtrl', function ($scope, Restangular, $location) {

    // GET request for movie list
    $scope.movieList = Restangular.all('movies').getList().$object;

    // setting up the ability to get selected items from grid
    $scope.selectedMovie = [];

    // initialize the grid
    $scope.movies = { 
        data: 'movieList', 
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


movieApp.controller('MovieDetailCtrl', function ($scope, $routeParams, Restangular, $location) {
    // I have a feeling there's a better way to handle this too
    Restangular.all('movies').getList().then(function (movieList) {

        movieList.forEach(function (elem){
            if($routeParams.movieId == elem.id){
                $scope.movie = elem;
            }
        });
    });

    $scope.save = function(movie){
        console.log(movie.title);
    }

    $scope.cancel = function(){
        $location.url('/');
    }


});