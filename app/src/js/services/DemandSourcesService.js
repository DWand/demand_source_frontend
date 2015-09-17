DemandSources_mp.factory('DemandSourcesService', [
'Restangular',
function(Restangular) {

    /**
     * Service methods:
     * get(id: int, [queryParams: object]): Promise
     * getList([queryParams: object, headers: object]): Promise
     * create([initialProperties: object]): Model
     *
     * Model methods:
     * save(): Promise
     * remove(): Promise
     * duplicate(): Promise
     * patch(objectWithChanges: object, [queryParams: object, headers: object]): Promise
     */

    var route = 'demand_sources';
    var defaults = {
        name: '',
        description: '',
        url: '',
        floorCPM: 0,
        reqTimeout: 0,
        requestCap: 0,
        requestCapMode: 0,
        viewsCap: 0,
        viewsCapMode: 0,
        frequencyCap: 0,
        frequencyCapMode: 0,
        enabled: true,
        inFlightStart: new Date(),
        inFlightEnd: new Date(),
        inFlightTimeZone: 0,
        targeting: {
            filters: [],
            inFlightTimeMatrix: [],
            inFlightTimeMatrixMode: 1,
        }
    };


    // Extend model
    Restangular.extendModel(route, function(model) {
        model.duplicate = duplicateModel;
        return model;
    });

    function duplicateModel() {
        // this refers to model
        return this.customPOST({});
    }


    // Extend service
    var endpoint = Restangular.all(route);

    endpoint.create = createModel;

    function createModel(properties) {
        var model = angular.merge({}, defaults, properties);
        return Restangular.restangularizeElement(null, model, route);
    }

    return endpoint;

}]);
