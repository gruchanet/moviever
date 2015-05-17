'use strict';

angular.module('moviever.movie')
  .directive('poster', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/movie/directives/poster/poster.template.html' // based on: http://www.bootply.com/39MXB6thOk
    }
  });

