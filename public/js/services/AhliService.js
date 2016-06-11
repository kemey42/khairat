angular.module('AhliService', []).factory('Ahli', ['$http', function($http) {

  return {

    //call to get all ahli
    get : function() {
      return $http.get('/api/ahli');
    },

    //call to post and create new ahli
    post : function(ahliData) {
      return $http.post('/api/ahli', ahliData);
    },

    //call to delete exisiting ahli
    delete : function(id) {
      return $http.delete('/api/ahli' + id);
    }

  }

}]);