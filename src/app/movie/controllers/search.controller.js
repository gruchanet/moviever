'use strict';

angular.module('moviever.movie')
  .controller('SearchCtrl', function ($scope, $routeParams, $location, API, config) {
    var api = API($routeParams.type);
    var params = {page: $routeParams.page || 1};

    api[$routeParams.which].get(params)
      .$promise.then(function (response) {
        $scope.type = $routeParams.type;
        $scope.posters = response.results;
        $scope.pagination = {
          page: response.page,
          total_items: calculateTotalItems(response.total_results)
        };

        console.log(response);
      });

    $scope.goToPage = function (page) {
      $location.path('/' + $routeParams.type + '/' + $routeParams.which + '/' + page);
    };

    var calculateTotalItems = function (totalItems) {
      var itemsPerPage = config.tmdbApi.pagination.per_page;
      var maxPage = config.tmdbApi.pagination.max_page;
      var maxItems = itemsPerPage * maxPage;

      return (totalItems > maxItems) ? maxItems : totalItems;
    };
  });
