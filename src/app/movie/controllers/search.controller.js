'use strict';

angular.module('moviever.movie')
  .controller('SearchCtrl', function ($scope, $routeParams, $location, API, config) {
    var api = API($routeParams.type);
    var params = prepareParams($routeParams);

    api[$routeParams.which].get(params)
      .$promise.then(function (response) {
        $scope.modelType = $routeParams.type;
        $scope.discoverType = $routeParams.which;

        $scope.posters = response.results;
        $scope.pagination = {
          page: response.page,
          total_items: calculateTotalItems(response.total_results)
        };
      });

    function prepareParams(routeParams) {
      var params = angular.copy(routeParams);
      params.page = routeParams.page || 1;
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
      $location.path('/' + $routeParams.type + '/' + $routeParams.which + '/' + page);
    };
  });
