'use strict';

angular.module('moviever.movie')
  .directive('posterImage', function () {
    var posterSizes = {
      tiny: '92',
      small: '154',
      medium: '185',
      large: '342',
      xlarge: '500',
      huge: '780'
    };

    return {
      restrict: 'E',
      replace: true,
      template: '<img class="img-responsive poster-image">',
      link: function (scope, elem, attrs) {
        var width = posterSizes[attrs.size];

        if (attrs.path) {
          elem.attr('src', 'http://image.tmdb.org/t/p/w' + width + '/' + attrs.path);
        } else {
          elem.attr('src', 'http://dummyimage.com/' + width + 'x7:10&text=No image');
        }
      }
    }
  });

