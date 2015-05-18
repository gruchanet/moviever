'use strict';

// TODO: multi lang support

angular.module('moviever', [
  'ngAnimate',
  'ngCookies',
  'ngSanitize',
  'ngResource',
  'ngRoute',
  'mgcrea.ngStrap',
  'brantwills.paging',
  'moviever.api',
  'moviever.movie'
])
  .config(function ($routeProvider, $dropdownProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html'
      })
      .when('/:type/:which/:page?', {
        templateUrl: 'partials/list.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    angular.extend($dropdownProvider.defaults, {
      html: true
    });
  })
;
