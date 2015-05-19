'use strict';

angular.module('moviever.movie')
  .directive('typeSelect', function () {
    var types = [
      { value: 'movie', label: '<span class="glyphicon glyphicon-film"></span> Movie' },
      { value: 'tv', label: '<span class="glyphicon glyphicon-off"></span> TV Series' }
    ];

    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'app/movie/directives/typeSelect/typeSelect.template.html',
      link: function (scope, elem, attrs) {
        scope.types = types;

        for (var i = 0; i < attrs.length; i++) {
          elem.attr(attrs[i]);
        }
      }
    }
  });
