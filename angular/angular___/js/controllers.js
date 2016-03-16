var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope, $http){
	$http.get("angular/js/data.json").success(function(data){
		$scope.data = data;
	});
});