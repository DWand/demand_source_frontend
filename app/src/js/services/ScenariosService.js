angular.module('DemandSources_mp').factory('ScenariosService', [
'Restangular',
function(Restangular) {

  return Restangular.service('scenarios');

}]);
