angular.module('moviever')
  .constant('config', {
    appName: 'Moviever',
    appVersion: 0.1,
    tmdbApi: {
      url: 'http://api.themoviedb.org/3',
      key: 'secret_api_key',
      pagination: {
        perPage: 20,
        maxPage: 1000
      },
      images: {
        'url': 'http://image.tmdb.org/t/p/',
        'backdropSizes': {
          small: 'w300',
          medium: 'w780',
          large: 'w1280',
          original: 'original'
        },
        'logoSizes': {
          tiny: 'w45',
          small: 'w92',
          medium: 'w154',
          large: 'w185',
          xlarge: 'w300',
          huge: 'w500',
          original: 'original'
        },
        'posterSizes': {
          tiny: 'w92',
          small: 'w154',
          medium: 'w185',
          large: 'w342',
          xlarge: 'w500',
          huge: 'w780',
          original: 'original'
        },
        'profileSizes': {
          small: 'w45',
          medium: 'w185',
          large: 'h632',
          original: 'original'
        }
      }
    }
  });
