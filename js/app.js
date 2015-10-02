angular.module('madLibsApp', ['ngAnimate'])
	.controller('MyCtrl', ['$scope', function($scope) {
	
	    $scope.gender_title = 'Gender';

	    $scope.hide = false;

	    $scope.info = {
		    genderSingular: "he",
		    genderObjective: "him",
		    genderPossessive: "his"
		};

    	$scope.submit = function() {
		    if ($scope.madForm.$submitted && $scope.madForm.$valid && !($scope.madForm.$pristine)) {
		      $scope.hide = true;
		      return true;
		    }
		  };

    	$scope.reset = function(){
        	$scope.hide = false;
        	$scope.submitted = false;
        	$scope.info = {};
        	$scope.madForm.$setPristine();
    	}

	    $scope.gender = function(){
	      if($scope.info.genderSingular === 'she') {
	      	$scope.info.gender_title = 'Male';
	        $scope.info.genderSingular = 'he';
	        $scope.info.genderObjective = 'him';
	        $scope.info.genderPossessive = 'his';
	      } else {
	      	$scope.info.gender_title = 'Female';
	        $scope.info.genderSingular = 'she';
	        $scope.info.genderObjective = 'her';
	        $scope.info.genderPossessive = 'her';
	      }
	      };
}]);

