angular.module('ProfileCtrl', ['OrgService']).controller('ProfileController', function($scope, $window, orgFactory) {

  $scope.organization = {};
  $scope.tempID = '57732d87ac42584606b4a6e5';

  getOrganization();

  function getOrganization() {
    orgFactory.getOrg($scope.tempID)
      .then(function(response) {
        $scope.organization = response.data;
      }, function(error) {
        console.log('Error getting org: ' + error.message)
      });
  };

  $scope.saveProfile = function() {
    orgFactory.updateOrg($scope.organization)
      .then(function(response) {
        $window.location.href = '/';
        console.log($scope.organization);
      }, function(error) {
        console.log('Error getting org: ' + error.message)
      });
  };
});
