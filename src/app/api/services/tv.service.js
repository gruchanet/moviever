'use strict';

angular.module('moviever.api')
  .service('TV', function ($resource, config) {
    var api = angular.copy(config.tmdbApi);
    var apiTarget = 'tv';

    return {
      one: $resource(api.url + "/" + apiTarget + "/:id", { // optional: language
        api_key: api.key,
        id: '@id'
      }),
      on_the_air: $resource(api.url + "/" + apiTarget + "/on_the_air?api_key=:api_key", { // optional: language, page
        api_key: api.key
      }),
      popular: $resource(api.url + "/" + apiTarget + "/popular?api_key=:api_key", { // optional: language, page
        api_key: api.key
      }),
      top_rated: $resource(api.url + "/" + apiTarget + "/top_rated?api_key=:api_key", { // optional: language, page
        api_key: api.key
      }),
      search: $resource(api.url + "/search/" + apiTarget + "?api_key=:api_key&query=:query", { // optional: language, include_adult, page
        api_key: api.key,
        query: '@query'
      })
    };
  });
