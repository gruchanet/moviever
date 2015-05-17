'use strict';

angular.module('moviever.api')
  .factory('API', function (Movies, TV, Search) {

    return function (type) {
      switch (type) {
        case 'movie':
          return Movies;
        case 'tv':
          return TV;
        case 'search':
          return Search;
        default:
          throw 'Incorrect API type!';
      }
    };
  });
