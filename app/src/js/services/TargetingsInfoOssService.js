angular.module('DemandSources_mp').factory('TargetingInfoOssService', [
'Restangular',
function(Restangular) {

  return Restangular.service('targeting_information/oss');

}]);
