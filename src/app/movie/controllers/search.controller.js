'use strict';

angular.module('moviever.movie')
  .controller('SearchCtrl', function ($scope, $routeParams, Search) {
    // TODO:
    Search[$routeParams.type].get({query: 'tron'})
      .$promise.then(function (response) {
        $scope.posters = response.results;
      });
  });
