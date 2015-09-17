angular.module('DemandSources_mp').factory('TargetingInfoBrowsersService', [
'Restangular',
function(Restangular) {

  return Restangular.service('targeting_information/browsers');

}]);
