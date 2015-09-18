DemandSources_mp.controller('ScenarioListController', [
'$scope', '$state', 'ScenariosService',
function($scope, $state, ScenariosService) {

  var ctrlName = $state.current.controller;
  console.log(ctrlName, $scope, $state, this);

  var queryParams = {};

  $scope.scenarios = [];

  $scope.setArchived = setArchived;
  $scope.duplicate = duplicate;
  $scope.searchByQuery = searchByQuery;
  $scope.searchArchived = searchArchived;

  activate();

  function activate() {
    return loadScenarios();
  }

  function loadScenarios() {
    return ScenariosService.getList(queryParams)
      .then(function success(list) {
        $scope.scenarios = list;
      }, function error() {
        console.log(ctrlName + ': ' +
          'Unable to load scenarios.',
          arguments
        );
      });
  }

  function setArchived(model, isArchived) {
    console.warn(ctrlName + ': ' +
      '"setArchived" method is not implemented yet.',
      arguments
    );
  }

  function duplicate(model) {
    return model.duplicate();
  }

  function searchByQuery(query) {
    if (query) {
      queryParams.search = query;
    } else {
      delete queryParams.search;
    }

    return loadScenarios();
  }

  function searchArchived(archived) {
    if (archived) {
      queryParams.archived = archived;
    } else {
      delete queryParams.archived;
    }

    return loadScenarios();
  }

}]);
