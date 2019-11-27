/*
 Type - 1 - Method Chaining 
 */

var myApp1 = angular.module("MyModule",[])
					.controller("MyController",function($scope){
	
	$scope.message = "Hello World part 1";
});


/*
Type -2
*/ 

myApp1.controller("MyController1",function($scope){
	
	$scope.message = "Hello World part 2";
});


/*
 * Type 3
 */
var myController = function($scope){
	
	$scope.message = "Hello World part 3";
}
myApp1.controller("MyController2",myController);

