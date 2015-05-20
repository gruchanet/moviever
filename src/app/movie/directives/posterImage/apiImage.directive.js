'use strict';

angular.module('moviever.movie')
  .directive('apiImage', function (config) {
    var imageBaseUrl = config.tmdbApi.images.url;

    return {
      restrict: 'E',
      replace: true,
      template: '<img class="img-responsive">',
      link: function (scope, elem, attrs) {
        var imgSizes = config.tmdbApi.images[attrs.type + 'Sizes'];

        var widthPath = imgSizes[attrs.size];
        var width = widthPath.slice(1);

        if (attrs.path) {
          elem.attr('src', imageBaseUrl + widthPath + '/' + attrs.path);
        } else {
          elem.attr('src', 'http://dummyimage.com/' + width + 'x7:10&text=No image');
        }
      }
    }
  });

