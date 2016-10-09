(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.list = "";
  $scope.result ="";
  $scope.sayHello = function () {
    return "";
  };

  $scope.checkList = function(){
  	var str_array = $scope.list.split(";");
  	var number = 0;

  	number = str_array.length;

  	if( number > 3 ){
  		$scope.result = "Too much!";
  	}
  	else {
  		$scope.result = "Enjoy!";
  	}

  }
};

})();
