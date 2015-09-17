angular.module('DemandSources_mp').factory('DomainListsService', [
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
     * exportList(): Promise
     * patch(objectWithChanges: object, [queryParams: object, headers: object]): Promise
     */

    var route = 'domain_lists';
    var defaults = {
        name: '',
        description: '',
        domains: []
    };


    // Extend model
    Restangular.extendModel(route, function(model) {
        model.duplicate = duplicateModel;
        model.exportList = exportListModel;
        return model;
    });

    function duplicateModel() {
        // this refers to model
        return this.customPOST({});
    }

    function exportListModel() {
        return this.customPOST({}, 'export')
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
