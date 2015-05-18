'use strict';

angular.module('moviever.movie')
  .controller('SearchFormCtrl', function ($scope) {
    $scope.form = {};
    $scope.form.selectedType = $scope.providedType;

    $scope.submit = function (data) {
      console.log(data);
    };
  });
