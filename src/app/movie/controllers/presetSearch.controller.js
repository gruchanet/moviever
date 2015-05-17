'use strict';

angular.module('moviever.movie')
  .controller('PresetSearchCtrl', function ($scope, $routeParams, API) {

    var api = API($routeParams.type);

    api[$routeParams.which].get()
      .$promise.then(function (response) {
        $scope.type = $routeParams.type;
        $scope.posters = response.results;

        //console.log(response);
      });
  });
