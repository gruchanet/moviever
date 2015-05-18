'use strict';

angular.module('moviever')
  .controller('MainCtrl', function ($scope, config) {
    $scope.title = config.appName + " v" + config.appVersion + "";
  });
