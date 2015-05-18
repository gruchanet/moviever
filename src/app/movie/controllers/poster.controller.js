'use strict';

angular.module('moviever.movie')
  .controller('PosterCtrl', function ($scope) {
    var colors = [
      'primary', 'success', 'info', 'warning', 'danger'
    ];

    $scope.getGenreColor = function (idx) {
      return colors[idx % colors.length];
    };
  });
