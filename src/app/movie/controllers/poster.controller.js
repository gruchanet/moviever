'use strict';

angular.module('moviever.movie')
  .controller('PosterCtrl', function ($scope, $routeParams, $location) {
    var colors = [
      'primary', 'success', 'info', 'warning', 'danger'
    ];

    $scope.getGenreColor = function (idx) {
      return colors[idx % colors.length];
    };

    $scope.followPosterLink = function (id) {
      $location.path('/' + $routeParams.type + '/' + id);
    };
  });
