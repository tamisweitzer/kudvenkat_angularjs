
var app = angular.module('app', []);
app.controller('myCtrl', function($scope) {
  var employee = {
    firstName: 'David',
    lastName: 'Hastings',
    gender: 'male'
  };

  $scope.employee = employee;
});
