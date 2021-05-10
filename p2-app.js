
// ways to build the module and controller

// In three steps
var myApp = angular.module('myModule', []);
var myController = function ($scope) {
  // do something
};
myApp.controller('myController', myController);

// In two steps
var myApp = angular.module('myModule', []);
myApp.controller('myController', function($scope) {
  // do something
});


// In one step
var myApp = angular
.module('myModule', [])
.controller('myController', function($scope) {
  // do something
})
