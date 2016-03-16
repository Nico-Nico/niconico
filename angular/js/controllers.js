angular.module('skillsApp', [])

.controller('SkillsController', function SkillsController($scope, $http){
	$http.get("angular/js/data.json").success(function(data){
		$scope.data = data;
		$scope.maxScore = 5;
	});
})
  .directive('skillRating', function () {
    return {
      replace: true,
      restrict: 'A',
      template: '<ul class="rating">' +
                  '<li ng-repeat="star in stars" ng-class="star">' +
                    '\u2605' +
                  '</li>' +
                '</ul>',
      scope: {
        ratingValue: '=',
      },
      link: function (scope, elem, attrs) {
          scope.stars = [];
          for (var i=0; i<5; i++){
            scope.stars.push({filled: i<scope.ratingValue});
          }
      }
    }
  });