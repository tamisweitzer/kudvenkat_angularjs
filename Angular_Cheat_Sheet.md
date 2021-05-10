# AngularJS Cheat Sheet

## Initial Set Up Using .module Method

If you call `.module` with only one parameter that means you are referring to an existing module. When you pass it the second parameter, the empty array, that means you are creating a new module.

```javascript
let app = angular.module("app", []);
```

Assign the module to the `ng-app` directive in the `index.html` file.

```html
<html ng-app="app">
  ...
</html>
```

Create a controller. It's good practice to wrap the second parameter in an array so that if your code get minified you won't lose access to your $scope variable.

```javascript
app.controller("MainController", ['$scope', function($scope) { // do stuff }]);
```

Attach the controller to the section of your page that you want to be controller by the controller.

```html
<body ng-controller="MainController">
  ...
</body>
```

## Two-way Data Binding

```html
<input type="text" ng-model="firstName" />
<p>{{ firstName }}</p>
```

## ngRepeat Directive

The ngRepeat directive will repeat the element it is attached to once for each item in an array.

```html
  <p ng-repeat="i in ['Bob', 'Bill', 'Ben', 'Buzz']>{{ i }}</p>
```

Bob

Bill

Ben

Buzz

## ngClick Events

The ngClick directive works much like the HTML click event. The click event will call a function from the controller to handle the click.

```html
<input type="button" value="Like" ng-click="handleLike()" />
```

## Filters

Filters allow you to format input from the controller before displaying it in the view.

There are a number of built-in functions.

```html
<p>{{ name | lowercase }}</p>
<p>{{ name | uppercase }}</p>
<p>{{10.251 | currency }}</p>
```

You can make your own function by calling the `.filter` method.

```javascript
app.filter("toLowerCase", function () {
  return function (str) {
    return str.toLowerCase();
  };
});

app.filter("toTitleCase", function () {
  return function (str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
});
```

### The orderBy Filter

The first parameter is the value to be ordered by. The second parameter is a boolean for the reverse property.

Use either true/false or +/-.

- to sort ascending, a-z, set reverse to false
- to sort descending, z-a, set reverse to true

```html
<li ng-repeat="emp in Employees | orderBy:'firstName':false">
  {{ emp.firstName }}
</li>
```
