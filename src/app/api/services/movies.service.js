'use strict';

angular.module('moviever.api')
  .service('Movies', function ($resource, config) {
    var api = config.tmdbApi;
    api.url += '/movie';

    return {
      one: $resource(api.url + "/:id", { // optional: language
        api_key: api.key,
        id: '@id'
      }),
      upcoming: $resource(api.url + "/upcoming?api_key=:api_key", { // optional: language, page
        api_key: api.key
      }),
      popular: $resource(api.url + "/popular?api_key=:api_key", { // optional: language, page
        api_key: api.key
      }),
      top_rated: $resource(api.url + "/top_rated?api_key=:api_key", { // optional: language, page
        api_key: api.key
      })
    };
  });
