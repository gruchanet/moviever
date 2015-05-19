'use strict';

angular.module('moviever.api')
  .factory('API', function (Movies, TV) {

    return function (type) {
      switch (type) {
        case 'movie':
          return Movies;
        case 'tv':
          return TV;
        default:
          throw 'Incorrect API type!';
      }
    };
  });
