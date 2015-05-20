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
  'angularUtils.directives.dirDisqus',
  'moviever.api',
  'moviever.movie'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $dropdownProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html'
      })
      .state('one', {
        url: '/:type/{id:int}',
        templateUrl: 'partials/full_info.html',
        controller: 'FullInfoCtrl'
      })
      .state('list', {
        url: '/:type/:which/:page?{query:string}',
        templateUrl: 'partials/list.html',
        controller: 'SearchCtrl'
      });
    $urlRouterProvider.otherwise('/');

    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');

    angular.extend($dropdownProvider.defaults, {
      html: true
    });
  })
;
