angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/member', {
			templateUrl: 'views/member.html',
			controller: 'MemberController'
		})

		.when('/member/new', {
			templateUrl: 'views/memberNew.html',
			controller: 'MemberController'
		})

		.when('/member/:icnumber',{
			templateUrl: 'views/memberInfo.html',
			controller: 'MemberInfoController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		});

	$locationProvider.html5Mode(true);

}]);