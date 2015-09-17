angular.module('DemandSources_mp').factory('TargetingInfoDevicesService', [
'Restangular',
function(Restangular) {

  return Restangular.service('targeting_information/devices');

}]);
