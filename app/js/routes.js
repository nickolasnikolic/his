var artApp = angular.module('artApp', ['ui.router', 'ngSanitize', 'angular.filter'])
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
        onEnter: function($state) {
          console.log('home');
        }
      })

      .state('inside', {
        url: '/inside',
        templateUrl: 'templates/inside.html',
        controller: 'InsideController',
        onEnter: function($state) {
          console.log('inside');
        }
      })
      .state('outside', {
        url: '/outside',
        templateUrl: 'templates/outside.html',
        controller: 'OutsideController',
        onEnter: function($state) {
          console.log('outside');
        }
      })
      .state('clothing', {
        url: '/clothing',
        templateUrl: 'templates/clothing.html',
        controller: 'ClothingController',
        onEnter: function($state) {
          console.log('clothing');
        }
      })
      .state('bedroom', {
        url: '/bedroom',
        templateUrl: 'templates/bedroom.html',
        controller: 'BedroomController',
        onEnter: function($state) {
          console.log('bedroom');
        }
      })
      .state('walls', {
        url: '/walls',
        templateUrl: 'templates/walls.html',
        controller: 'WallsController',
        onEnter: function($state) {
          console.log('walls');
        }
      })
      .state('garage', {
        url: '/garage',
        templateUrl: 'templates/garage.html',
        controller: 'GarageController',
        onEnter: function($state) {
          console.log('garage');
        }
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html',
        controller: 'ContactController',
        onEnter: function($state) {
          console.log('contact');
        }
      })
    }
  ]);
