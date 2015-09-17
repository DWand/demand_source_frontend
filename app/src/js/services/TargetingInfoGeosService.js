angular.module('DemandSources_mp').factory('TargetingInfoGeosService', [
'Restangular',
function(Restangular) {

  return Restangular.service('targeting_information/geos');

}]);
