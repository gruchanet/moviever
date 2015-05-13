'use strict';

angular.module('moviever')
  .controller('MainCtrl', function ($scope, Movies) {
    $scope.movies = Movies.query('thrones');

    console.log($scope.movies);
  });
