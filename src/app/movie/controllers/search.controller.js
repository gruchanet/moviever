'use strict';

angular.module('moviever.movie')
  .controller('SearchCtrl', function ($scope, $stateParams, $location, API, config) {
    var api = API($stateParams.type);
    var params = prepareParams($stateParams);

    api[$stateParams.which].get(params)
      .$promise.then(function (response) {
        $scope.modelType = $stateParams.type;
        $scope.discoverType = $stateParams.which;

        $scope.posters = response.results;
        $scope.pagination = {
          page: response.page,
          total_items: calculateTotalItems(response.total_results)
        };
      });

    function prepareParams(stateParams) {
      var params = angular.copy(stateParams);
      params.page = stateParams.page || 1;
      delete params.type;
      delete params.which;

      return params;
    }

    function calculateTotalItems(totalItems) {
      var itemsPerPage = config.tmdbApi.pagination.per_page;
      var maxPage = config.tmdbApi.pagination.max_page;
      var maxItems = itemsPerPage * maxPage;

      return (totalItems > maxItems) ? maxItems : totalItems;
    }

    $scope.goToPage = function (page) {
      $location.path('/' + $stateParams.type + '/' + $stateParams.which + '/' + page);
    };
  });
