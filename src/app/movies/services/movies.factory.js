'use strict';

angular.module('moviever')
.service('Movies', function (Restangular) {
    var tmdbURL = 'http://api.themoviedb.org/3/search';
    var apiKey = 'secret_api_key';

    Restangular.setBaseUrl(tmdbURL);
    Restangular.setDefaultRequestParams({api_key: apiKey});

    return {
      query: function (query) {
        return Restangular.all('movie').getList({query: query}).$object;
      }
    };
    //return Restangular.service('movie');
  });
