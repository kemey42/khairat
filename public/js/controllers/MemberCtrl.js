angular.module('MemberCtrl', ['MemberService']).controller('MemberController', function($scope, memberFactory) {
  $scope.member;

  getMembers();

  function getMembers() {
    memberFactory.getMembers()
      .then(function(response){
        $scope.member = response.data;
      }, function(error){
        $scope.status = "Error" + error.message;
      });
  };

  $scope.addMember = function(){
    var newMember = {
      fullname: $scope.fullname,
      homeaddress: $scope.homeaddress,
      dob: $scope.dob,
      icnumber: $scope.icnumber,
      homenumber: $scope.homenumber,
      mobilenumber: $scope.mobilenumber,
      occupation: $scope.occupation,
      email: $scope.email
    };

    memberFactory.insertMember(newMember)
      .then(function(response){
        $scope.status = "New user succesfully added";
      }, function(error){
        $scope.status = "Error" + error.message;
      });

    $scope.fullname = '';
    $scope.homeaddress = '';
    $scope.dob = '';
    $scope.icnumber = '';
    $scope.homenumber = '';
    $scope.mobilenumber = '';
    $scope.occupation = '';
    $scope.email = '';

    getMembers();
  };
});
