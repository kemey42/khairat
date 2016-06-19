angular.module('MemberService', []).factory('Member', ['$http', function($http) {

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

}]);