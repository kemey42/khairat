angular.module('OrgService', []).factory('orgFactory', ['$http', function($http) {

  var urlBase = '/api/org';
  var orgFactory = {};

  orgFactory.getOrg = function(id) {
    return $http.get(urlBase + '/' + id);
  }

  orgFactory.insertOrg = function(org) {
    return $http.post(urlBase, member);
  }

  orgFactory.updateOrg = function(org) {
    console.log(urlBase + '/' + org._id);
    return $http.put(urlBase + '/' + org._id, org);
  }

  return orgFactory;

}]);
