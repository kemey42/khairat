angular.module('MemberInfoCtrl', ['MemberService']).controller('MemberInfoController', function($scope, $routeParams, memberFactory) {

  $scope.icnumber = $routeParams.icnumber;
  $scope.member;

  getMemberInfo();

  function getMemberInfo() {

    memberFactory.getMember($scope.icnumber)
      .then(function(response) {
        $scope.member = response.data;
      }, function(error) {
        $scope.status = 'Error: ' + error.message;
      });

  };

  $scope.deleteMember = function() {

    memberFactory.removeMember($scope.icnumber)
      .then(function(response) {
        $scope.status = 'Message: ' + response.data.message;
      }, function(error) {
        $scope.status = 'Error: ' + error.message;
      });
  }

});
