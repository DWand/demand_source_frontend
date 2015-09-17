angular.module('DemandSources_mp').factory('TargetingInfoPublishersService', [
'Restangular',
function(Restangular) {

  return Restangular.service('targeting_information/publishers');

}]);
