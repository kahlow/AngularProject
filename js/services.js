var movieServices = angular.module('movieServices', ['restangular']);

movieServices.factory('movieListService', ['Restangular', function(Restangular) {
    return {
        getMovieList:  Restangular.all('movies').getList()
    }
}]);