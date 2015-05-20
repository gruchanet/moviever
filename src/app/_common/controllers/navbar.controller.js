'use strict';

angular.module('moviever')
  .controller('NavbarCtrl', function ($scope, searchModal) {
    $scope.navCollapsed = true;

    $scope.movieDropdown = [
      {
        text: "<span class=\"glyphicon glyphicon-time\"></span> Upcoming",
        href: "#/movie/upcoming/"
      },
      {
        text: "<span class=\"fa fa-users\"></span> Popular",
        href: "#/movie/popular/"
      },
      {
        text: "<span class=\"glyphicon glyphicon-star\"></span> Top rated",
        href: "#/movie/top_rated/"
      }
    ];

    $scope.tvDropdown = [
      {
        text: "<span class=\"glyphicon glyphicon-cloud\"></span> On the air",
        href: "#/tv/on_the_air/"
      },
      {
        text: "<span class=\"fa fa-users\"></span> Popular",
        href: "#/tv/popular/"
      },
      {
        text: "<span class=\"glyphicon glyphicon-star\"></span> Top rated",
        href: "#/tv/top_rated/"
      }
    ];

    $scope.showSearchModal = function() {
      searchModal.show();
    };
  });
