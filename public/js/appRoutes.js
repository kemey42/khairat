angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/member/all', {
			templateUrl: 'views/memberList.html',
			controller: 'MemberController'
		})

		.when('/member', {
			templateUrl: 'views/memberNew.html',
			controller: 'MemberController'
		})

		.when('/member/:icnumber',{
			templateUrl: 'views/memberInfo.html',
			controller: 'MemberInfoController'
		})

		.when('/profile/:_id/update', {
			templateUrl: 'views/profileUpdate.html',
			controller: 'ProfileController'	
		});

	$locationProvider.html5Mode(true);

}]);