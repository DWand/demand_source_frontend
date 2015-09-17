angular.module('DemandSources_mp').factory('TargetingInfoPlatformsService', [
'Restangular',
function(Restangular) {

  return Restangular.service('targeting_information/platforms');

}]);
