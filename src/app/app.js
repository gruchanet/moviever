'use strict';

// TODO: multi lang support

angular.module('moviever', [
  'ngAnimate',
  'ngCookies',
  'ngSanitize',
  'ngResource',
  'ui.router',
  'mgcrea.ngStrap',
  'brantwills.paging',
  'moviever.api',
  'moviever.movie'
])
  .config(function ($stateProvider, $urlRouterProvider, $dropdownProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html'
      })
      .state('list', {
        url: '/:type/:which/:page?{query:string}',
        templateUrl: 'partials/list.html',
        controller: 'SearchCtrl'
      });
    $urlRouterProvider.otherwise('/');


    angular.extend($dropdownProvider.defaults, {
      html: true
    });
  })
;
