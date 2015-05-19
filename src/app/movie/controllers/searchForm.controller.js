'use strict';

angular.module('moviever.movie')
  .controller('SearchFormCtrl', function ($scope, $location) {
    $scope.form = {};
    $scope.form.type = $scope.providedType; // init with provided type

    $scope.submit = function (data) {
      // prepare params
      var params = {
        query: data.searchQuery
      };
      if (data.lang) {
        params.language = data.lang;
      }

      // go to search url to invoke SearchCtrl
      $location.path('/search/' + data.type + '/').search(params);
    };
  });
