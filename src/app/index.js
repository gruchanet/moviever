'use strict';

angular.module('moviever', ['ngAnimate', 'ngCookies', 'ngSanitize', 'restangular', 'ngRoute', 'mm.foundation'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
