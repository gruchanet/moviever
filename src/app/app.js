'use strict';

// TODO: multi lang support

angular.module('moviever', [
  'ngAnimate',
  'ngCookies',
  'ngSanitize',
  'ngResource',
  'ngRoute',
  'mgcrea.ngStrap',
  'moviever.api'
])
  .config(function ($routeProvider, $dropdownProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    angular.extend($dropdownProvider.defaults, {
      html: true
    });
  })
;
