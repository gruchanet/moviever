'use strict';

// TODO: multi lang support

angular.module('moviever', [
  'ngAnimate',
  'ngCookies',
  'ngSanitize',
  'ngResource',
  'ngRoute',
  'mgcrea.ngStrap',
  'moviever.api',
  'moviever.movie'
])
  .config(function ($routeProvider, $dropdownProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      })
      .when('/:type/search/:page?', {
        templateUrl: 'partials/list.html',
        controller: 'SearchCtrl'
      })
      .when('/:type/:which/:page?', {
        templateUrl: 'partials/list.html',
        controller: 'PresetSearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    angular.extend($dropdownProvider.defaults, {
      html: true
    });
  })
;
