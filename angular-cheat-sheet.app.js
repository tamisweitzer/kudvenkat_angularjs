let app = angular.module('app', []);
app.controller('MainController', ['$scope', function($scope) {
  $scope.msg = "working";

  $scope.employees = [
    {
      name: 'Jane Smith',
      age: 40,
      salary: 75000,
      gender: 'female'
    },
    {
      name: 'Alex Carruthers',
      age: 23,
      salary: 43000,
      gender: 'male'
    },
    {
      name: 'Emily Tran',
      age: 28,
      salary: 58000,
      gender: 'female'
    },
    {
      name: 'Zoe Finley',
      age: 65,
      salary: 84000,
      gender: 'other'
    },
  ];
  
}])