'use strict';

angular.module('moviever.movie')
  .controller('FullInfoCtrl', function ($scope, $location, $stateParams, fullInfo) {
    $scope.disqus = {
      id: $stateParams.type + '/' + $stateParams.id,
      url: $location.absUrl()
    };

    $scope.fullInfo = fullInfo;
  });
