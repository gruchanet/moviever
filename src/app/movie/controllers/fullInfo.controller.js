'use strict';

angular.module('moviever.movie')
  .controller('FullInfoCtrl', function ($scope, $stateParams, $location, API) {
    $scope.disqus = {
      id: $stateParams.type + '/' + $stateParams.id,
      url: $location.absUrl()
    };

    API($stateParams.type).one.get({id: $stateParams.id})
      .$promise.then(function (response) {
        $scope.fullInfo = response;

        console.log(response);
      });
  });
