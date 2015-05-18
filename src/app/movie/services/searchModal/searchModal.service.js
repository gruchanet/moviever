'use strict';

angular.module('moviever.movie')
  .service('searchModal', function ($modal) {

    var pluralizeType = function (type) {
      var typePluralized = type;

      switch (type) {
        case 'movie':
          typePluralized += 's';
          break;
        case 'tv':
          typePluralized += ' series';
          break;
      }

      return typePluralized;
    };

    return {
      show: function (scope, type) {
        scope.providedType = type; // scope must be instantiated in controller

        return $modal({
          scope: scope,
          title: 'Search for <b>' + pluralizeType(type) + '</b>',
          template: 'partials/search.html',
          animation: 'am-fade-and-scale',
          html: true,
          show: true
        });
      }
    }
  });
