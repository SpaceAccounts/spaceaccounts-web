var webApp = angular.module('webApp', ['ui.bootstrap', 'ui.router', 'ngAnimate']);

webApp.controller('mainCtrl',
	function($scope){
		$scope.message = "Angular is working";
		$scope.name = 'World';
	});

webApp.controller('buttonCtrl', 
	function($scope){
		$scope.singleModel = 1;
});

webApp.controller('DropdownCtrl', function($scope) {
    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
});

