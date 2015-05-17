'use strict';

angular.module('moviever')
  .controller('HomeCtrl', function ($scope, Search) {
    var movies = Search.tv.get({query: 'tron'});

    console.log(movies);
  });
