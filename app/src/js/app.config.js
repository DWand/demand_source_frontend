// Restangular config
angular.module('DemandSources_mp').config([
'RestangularProvider',
function(RestangularProvider) {

    RestangularProvider.setBaseUrl('/api');

}]);
