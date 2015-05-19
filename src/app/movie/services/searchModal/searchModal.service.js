'use strict';

angular.module('moviever.movie')
  .service('searchModal', function ($modal) {

    return {
      show: function () {
        return $modal({
          title: 'Search',
          template: 'partials/search.html',
          animation: 'am-fade-and-scale',
          html: true,
          show: true
        });
      }
    }
  });
