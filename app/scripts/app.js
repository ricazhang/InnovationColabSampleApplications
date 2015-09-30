'use strict';

/**
 * @ngdoc overview
 * @name innovationColabSampleApplicationsApp
 * @description
 * # innovationColabSampleApplicationsApp
 *
 * Main module of the application.
 */
angular
  .module('innovationColabSampleApplicationsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
