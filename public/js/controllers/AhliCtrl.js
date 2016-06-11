angular.module('AhliCtrl', []).controller('AhliController', function($scope) {
  $scope.ahli = [];

  $scope.addAhli = function(){
    $scope.ahli.push({
      fullname: $scope.fullname,
      homeaddress: $scope.homeaddress,
      dob: $scope.dob,
      icnumber: $scope.icnumber,
      homenumber: $scope.homenumber,
      mobilenumber: $scope.mobilenumber,
      occupation: $scope.occupation,
      email: $scope.email
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