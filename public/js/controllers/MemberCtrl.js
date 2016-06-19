angular.module('MemberCtrl', [])
.factory('memberFactory', ['$http', function($http) {

  var urlBase = '/api/member';
  var memberFactory = {};

  memberFactory.getMembers = function() {
    return $http.get(urlBase);
  };

  memberFactory.getMember = function(id) {
    return $http.get(urlBase + '/' + id);
  };

  memberFactory.insertMember = function(member) {
    return $http.post(urlBase, member);
  }

  return memberFactory;

}])
.controller('MemberController', function($scope, memberFactory) {
  $scope.member = [];

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
  };
});
