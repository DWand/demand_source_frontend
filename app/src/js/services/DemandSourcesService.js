angular.module('DemandSources_mp').factory('DemandSourceService', [
'Restangular',
function(Restangular) {

  return Restangular.service('demand_sources');

}]);
