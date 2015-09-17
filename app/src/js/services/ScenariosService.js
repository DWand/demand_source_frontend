angular.module('DemandSources_mp').factory('ScenariosService', [
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

    var route = 'scenarios';
    var defaults = {
        name: '',
        description: '',
        tiers: []
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
