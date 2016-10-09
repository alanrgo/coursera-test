(function () {
'use strict';

angular.module('module1-assignment', [])

.controller('mod1-ctrl', function ($scope) {
  $scope.name = "Yaakov";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
