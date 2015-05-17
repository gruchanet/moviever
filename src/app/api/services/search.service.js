'use strict';

angular.module('moviever.api')
  .service('Search', function ($resource, config) {
    var api = config.tmdbApi;
    api.url += '/search';

    return {
      multi: $resource(api.url + "/multi?api_key=:api_key&query=:query", { // optional: language, include_adult, page
        api_key: api.key,
        query: '@query'
      }),
      movie: $resource(api.url + "/movie?api_key=:api_key&query=:query", { // optional: language, include_adult, page
        api_key: api.key,
        query: '@query'
      }),
      tv: $resource(api.url + "/tv?api_key=:api_key&query=:query", { // optional: language, include_adult, page
        api_key: api.key,
        query: '@query'
      })
    };
  });
