'use strict';

angular.module('moviever.movie')
  .controller('SearchCtrl', function ($scope, Search) {
    Search.tv.get({query: 'tron'})
      .$promise.then(function (response) {
        $scope.posters = response.results;

        console.log($scope.posters);
      });
  });
