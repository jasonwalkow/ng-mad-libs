angular.module('madLibsApp', [])
	.controller('MyCtrl', ['$scope', function($scope) {
	    $scope.job_title = 'Job Title';
	    $scope.tedious_task = 'Tedious Task';
	    $scope.dirty_task = 'Dirty Task';
	    $scope.celebrity =  'Celebrity';
	    $scope.useless_skill = 'Useless Skill';
	    $scope.obnoxious_celebrity = 'Obnoxious Celebrity';
	    $scope.huge_number = 999999;
	    $scope.adjective =  'Adjective';
	    $scope.Name = 'Name';
	    $scope.gender_title = 'Gender';
	    $scope.gender = function(){
	      if($scope.genderSingular === 'she') {
	      	$scope.gender_title = 'Male';
	        $scope.Name = 'Male Name';
	        $scope.genderSingular = 'he';
	        $scope.genderObjective = 'him';
	        $scope.genderPossessive = 'his';
	      } else {
	      	$scope.gender_title = 'Female';
	        $scope.Name = 'Female Name';
	        $scope.genderSingular = 'she';
	        $scope.genderObjective = 'her';
	        $scope.genderPossessive = 'her';
	      }
	      };
}]);

