angular.module('MemberCtrl', ['MemberService']).controller('MemberController', function($scope, memberFactory) {
  $scope.member;

  getMembers();

  function getMembers() {
    memberFactory.getMembers()
      .then(function(response) {
        $scope.member = response.data;
      }, function(error) {
        $scope.status = 'Error: ' + error.message;
      });
  };

  $scope.addMember = function() {

    memberFactory.insertMember($scope.inputNewMember)
      .then(function(response) {
        $scope.inputNewMember = '';
        $scope.status = 'New user succesfully added';
        getMembers();
      }, function(error) {
        $scope.status = 'Error: ' + error.message;
      });

  };
});
