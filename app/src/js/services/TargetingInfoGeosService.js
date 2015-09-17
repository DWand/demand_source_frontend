angular.module('DemandSources_mp').factory('TargetingInfoGeosService', [
'Restangular',
function(Restangular) {

    /**
     * Service methods:
     * getList([queryParams: object, headers: object]): Promise
     * search(query: string): Promise
     */

    var route = 'targeting_information/geos';
    var endpoint = Restangular.all(route);

    endpoint.search = search;

    function search(query) {
        return this.getList({ search: query });
    }

    return endpoint;

}]);
