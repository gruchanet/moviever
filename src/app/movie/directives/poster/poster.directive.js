'use strict';

angular.module('moviever.movie')
  .directive('poster', function (API) {
    return {
      restrict: 'E',
      templateUrl: 'app/movie/directives/poster/poster.template.html', // based on: http://www.bootply.com/39MXB6thOk
      link: function (scope) {
        var type = scope.modelType;

        API(type).one.get({id: scope.poster.id})
          .$promise.then(function (response) {
            scope.genres = response.genres;
          });
      }
    }
  });

