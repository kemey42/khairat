angular.module('MainCtrl', ['OrgService']).controller('MainController', function($scope, orgFactory) {

	$scope.tagline1 = 'Stage: development';
  $scope.tagline2 = 'Developer: akmal awesome';
  $scope.tempID = '57732d87ac42584606b4a6e5';	

  $scope.organization;

  getOrganization();

  function getOrganization() {
    orgFactory.getOrg($scope.tempID)
    .then(function(response){
      $scope.organization = response.data;
    }, function(error) {
      console.log('Error getting org: ' + error.message)
    });
  };
});