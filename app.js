let app = angular.module('app', []);
    app.controller('MainController', ['$scope', function($scope) {
      $scope.msg = 'working';
      $scope.list = [
        {
          name: 'p1 Basics of Angular',
          url: 'p1.html',
          description: 'Basic usage of the curly braces. Reviews how the braces hold any legitimate JavaScript expression.',
          tags: ['curly braces', ''],
        },
        {
          name: 'p2 Controllers',
          url: 'p2.html',
          description: 'Three ways to make a controller',
          tags: ['controller', 'module'],
        },
        {
          name: 'p3 One-way Data Binding',
          url: 'p3.html',
          description: 'One-way data binding using the curly braces',
          tags: ['data binding', ''],
        },
        {
          name: 'p4 Images',
          url: 'p4.html',
          description: 'Images using src and ng-src',
          tags: ['images', 'ng-source'],

        },
        {
          name: 'p5 Two-way Data Binding',
          url: 'p5.html',
          description: 'How to do two-way data binding using the ngModel directive with the curly braces',
          tags: ['two way data binding', 'ng-model'],

        },
        {
          name: 'p6 ngRepeat in a Table',
          url: 'p6.html',
          description: 'How to use ngRepeat to build a table. How to use a nested ngRepeat for more complex structures.',
          tags: ['ng-repeat', 'nested ng-repeat'],

        },
        {
          name: 'p7 Handling Likes and Dislikes',
          url: 'p7.html',
          description: 'How to handle counting button clicks using ngClick',
          tags: ['ng-click', 'click events'],
        },
        {
          name: 'p8 Filters',
          url: 'p8.html',
          description: 'Describes how to use filters in the view to format text, dates, and numbers.',
          tags: ['filters', 'toUpper', 'toLower', 'currency', 'format dates', 'limitTo' ],
        },
        {
          name: 'p9 Sorting Data',
          url: 'p9.html',
          description: 'Sorting data in the view. Review sorting columns in a table by selecting the column name from a dropdown list.',
          tags: ['sorting', 'tables', 'alphabetical', 'reverse', 'orderBy', 'dropdown'],
        },
        {
          name: 'p10 Sort Rows by Table Header',
          url: 'p10.html',
          description: 'Continuation of p9. Same basic example.',
          tags: ['sorting', 'tables', 'alphabetical', 'reverse', 'orderBy', 'dropdown'],
        },
        {
          name: 'p11 Simple Search Bar',
          url: 'p11.html',
          description: 'Search and filter data in a table using a search bar',
          tags: ['search', 'search filter', 'tables'],
        },
        {
          name: 'p12 Complex Search Bar',
          url: 'p12.html',
          description: 'Search a table using multiple properties',
          tags: ['search', 'search filter', 'complex search', 'multiple search terms', 'tables'],
        },
        {
          name: 'p13 Custom Filters',
          url: 'p13.html',
          description: 'Creating Custom Filters',
          tags: ['filter', 'custom filter', 'search'],
        },
        {
          name: 'p14 ngHide and ngShow',
          url: 'p14.html',
          description: 'How to hide or show content based on a conditional statement.',
          tags: ['ngHide', 'ngShow', 'ngModel'],
        },
        {
          name: 'p15 ngInit Directive',
          url: 'p15.html',
          description: 'How to use the ngInit directive to initalize a value at start up. See official docs for warning on how not to overuse ngInit. ',
          tags: ['ngInit', 'directive', 'ngRepeat'],
        },
        {
          name: 'p16 ngInclude Directive',
          url: 'p16.html',
          description: 'How to use the ngInclude directive to include some bits of HTML in your page.',
          tags: ['ngInclude', 'directive'],
        },
        {
          name: 'p17 Consuming ASP.NET Web Service',
          url: 'p17.html',
          description: 'Consuming ASP.NET Web Service',
          tags: ['web service', 'asp', '.net'],
        },
        {
          name: 'p18 $http Service',
          url: 'p18.html',
          description: 'Making use of the $http service to make GET, POST, PUT, and DELETE requests to a server.',
          tags: ['$http', 'service', 'crud', 'GET', 'POST', 'http request', 'api', 'XMLHttpRequest', 'JSONP', '$log service'],
        },
        {
          name: 'p19 Services',
          url: 'p19.html',
          description: 'Introduction to services',
          tags: ['services'],
        },
        {
          name: 'p20 Writing Custom Services',
          url: 'p20.html',
          description: 'How and when to write your own custom services',
          tags: ['services', ''],
        },
        {
          name: 'p21 Anchor Scroll',
          url: 'p21.html',
          description: 'How to use the $anchorScroll service to quickly scroll to the top or bottom of a page.',
          tags: ['$anchorScroll', 'service', '$location', 'hash', 'scroll location', ],
        },
        {
          name: 'p22 AnchorScroll with Database Data',
          url: 'p22.html',
          description: '',
          tags: ['$anchorScroll', ''],
        },
        {
          name: 'p23 Routing',
          url: '',
          description: 'Using ngRoute to navigate between different pages of a SPA',
          tags: ['ngRoute', 'router', 'SPA', ],
        },
        {
          name: '',
          url: '',
          description: '',
          tags: ['', ''],
        },
        {
          name: '',
          url: '',
          description: '',
          tags: ['', ''],
        },
        {
          name: '',
          url: '',
          description: '',
          tags: ['', ''],
        },
        {
          name: '',
          url: '',
          description: '',
          tags: ['', ''],
        },
        {
          name: '',
          url: '',
          description: '',
          tags: ['', ''],
        },
        {
          name: '',
          url: '',
          description: '',
          tags: ['', ''],
        },
        {
          name: '',
          url: '',
          description: '',
          tags: ['', ''],
        },
        {
          name: '',
          url: '',
          description: '',
          tags: ['', ''],
        },
        {
          name: '',
          url: '',
          description: '',
          tags: ['', ''],
        },
        {
          name: '',
          url: '',
          description: '',
          tags: ['', ''],
        },
        {
          name: '',
          url: '',
          description: '',
          tags: ['', ''],
        },
        {
          name: '',
          url: '',
          description: '',
          tags: ['', ''],
        },
      ];
    }])