'use strict';

angular.module('moviever')
  .directive('langSelect', function () {
    var languages = [
      { value: 'en', label: '<span class="flag-icon flag-icon-gb"></span> English' },
      { value: 'de', label: '<span class="flag-icon flag-icon-de"></span> Deutsch' },
      { value: 'fr', label: '<span class="flag-icon flag-icon-fr"></span> Français' },
      { value: 'es', label: '<span class="flag-icon flag-icon-es"></span> Español' },
      { value: 'it', label: '<span class="flag-icon flag-icon-it"></span> Italiano' },
      { value: 'ru', label: '<span class="flag-icon flag-icon-ru"></span> Русский' },
      { value: 'pt', label: '<span class="flag-icon flag-icon-pt"></span> Português' },
      { value: 'hu', label: '<span class="flag-icon flag-icon-hu"></span> Magyar' },
      { value: 'pl', label: '<span class="flag-icon flag-icon-pl"></span> Polski' }
    ];

    return {
      restrict: 'E',
      templateUrl: 'app/_common/directives/langSelect/langSelect.template.html',
      link: function (scope) {
        scope.icons = languages;
      }
    }
  });
