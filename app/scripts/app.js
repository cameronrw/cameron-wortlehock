'use strict';

/**
 * @ngdoc overview
 * @name cameronWortlehockApp
 * @description
 * # cameronWortlehockApp
 *
 * Main module of the application.
 */
angular
  .module('cameronWortlehockApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('HeaderController', function($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });