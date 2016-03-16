var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.skills = [
		{
			"title": "Python",
			"level": 4
		},
		{
			"title": "Scikit-Learn",
			"level": 2
		},
		{
			"title": "Twitter API",
			"level": 3
		},
		{
			"title": "Django",
			"level": 2
		},
		{
			"title": "HTML",
			"level": 3
		},
		{
			"title": "CSS",
			"level": 3
		},
		{
			"title": "JavaScript",
			"level": 3
		},
		{
			"title": "AngularJS",
			"level": 2
		},
		{
			"title": "JSON",
			"level": 3
		},
		{
			"title": "XML",
			"level": 2
		},
		{
			"title": "Command line",
			"level": 3
		},
		{
			"title": "2D/3D Graphics",
			"level": 4
		}
	]
});


	// "tools": [
	// 	{
	// 		"title": "Sublime Text",
	// 		"level": 4
	// 	},
	// 	{
	// 		"title": "Git",
	// 		"level": 3
	// 	},
	// 	{
	// 		"title": "Photoshop",
	// 		"level": 5
	// 	},
	// 	{
	// 		"title": "Cinema 4D",
	// 		"level": 4
	// 	}
	// ]