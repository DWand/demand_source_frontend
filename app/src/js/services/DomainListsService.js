angular.module('DemandSources_mp').factory('DomainListsService', [
'Restangular',
function(Restangular) {

  return Restangular.service('domain_lists');

}]);
