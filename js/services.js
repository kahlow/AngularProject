var movieServices = angular.module('movieServices', ['restangular']);

movieServices.factory('movieList', ['Restangular', function(Restangular) {
    return {
        getMovieList:  Restangular.all('movies').getList()
    }
}]);