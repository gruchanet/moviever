'use strict';

angular.module('moviever.movie')
  .controller('SearchModalCtrl', function ($scope, $location) {
    $scope.form = {};

    $scope.pluralizeType = function (type) {
      var typePluralized = type;

      switch (type) {
        case 'movie':
          typePluralized += 's';
          break;
        case 'tv':
          typePluralized += ' series';
          break;
      }

      return typePluralized;
    };

    $scope.submitForm = function (data) {
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
