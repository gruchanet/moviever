angular.module('moviever')
  .constant('config', {
    appName: 'Moviever',
    appVersion: 0.1,
    tmdbApi: {
      url: 'http://api.themoviedb.org/3',
      key: 'secret_api_key'
    }
  });
