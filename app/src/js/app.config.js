// Restangular config
angular.module('DemandSources_mp').config([
'RestangularProvider',
function(RestangularProvider) {

    RestangularProvider.setBaseUrl('api');
    RestangularProvider.setRequestSuffix('/');

    RestangularProvider.setResponseExtractor(function(response, operation) {
        console.log('Extractor', operation, response);
        if (operation === 'get') {
            return response.data;
        } else if (operation === 'getList') {
            return response.list;
        } else {
            return response;
        }
    });

}]);
