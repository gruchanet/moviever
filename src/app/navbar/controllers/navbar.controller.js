'use strict';

angular.module('moviever')
  .controller('NavbarCtrl', function ($scope) {
    $scope.navCollapsed = true;

    $scope.movieDropdown = [
      {
        text: "<span class=\"glyphicon glyphicon-time\"></span> Upcoming",
        href: "#/movie/latest"
      },
      {
        text: "<span class=\"fa fa-users\"></span> Popular",
        href: "#/movie/popular"
      },
      {
        text: "<span class=\"glyphicon glyphicon-star\"></span> Top rated",
        href: "#/movie/top"
      },
      {
        divider: true
      },
      {
        text: "<span class=\"glyphicon glyphicon-search\"></span> Search...",
        href: "#/movie/search"
      }
    ];

    $scope.tvDropdown = [
      {
        text: "<span class=\"glyphicon glyphicon-cloud\"></span> On the air",
        href: "#/"
      },
      {
        text: "<span class=\"fa fa-users\"></span> Popular",
        href: "#/tv/popular"
      },
      {
        text: "<span class=\"glyphicon glyphicon-star\"></span> Top rated",
        href: "#/tv/top"
      },
      {
        divider: true
      },
      {
        text: "<span class=\"glyphicon glyphicon-search\"></span> Search...",
        href: "#/tv/search"
      }
    ];
  });
