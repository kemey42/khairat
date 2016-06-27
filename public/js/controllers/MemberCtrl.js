angular.module('MemberCtrl', ['MemberService']).controller('MemberController', function($scope, memberFactory) {
  $scope.member;
  $scope.inputNewMember = {};
  $scope.inputNewMember.dependents = [];

  getMembers();

  function getMembers() {
    memberFactory.getMembers()
      .then(function(response) {
        $scope.member = response.data;
      }, function(error) {
        $scope.status = 'Error: ' + error.message;
      });
  };

  $scope.addDependents = function() {
    $scope.inputNewMember.dependents.push($scope.depTable.dependents);
    $scope.depTable.dependents = '';
  };

  $scope.delDependents = function(index) {
    $scope.inputNewMember.dependents.splice(index, 1);
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
