angular.module('DemandSources_mp').factory('TargetingInfoDomainsService', [
'Restangular',
function(Restangular) {

  return Restangular.service('targeting_information/domains');

}]);
