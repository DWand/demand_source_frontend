DemandSources_mp.controller('DemandSourceListController', [
'$scope', '$state', 'HelperService', 'DemandSourcesService',
function($scope, $state, HelperService, DemandSourcesService) {

  var ctrlName = $state.current.controller;
  console.log(ctrlName, $scope, $state, this, HelperService);

  var queryParams = {};

  $scope.alphabet = HelperService.getAlphabet();
  $scope.demandSources = [];

  $scope.setEnabled = setEnabled;
  $scope.setArchived = setArchived;
  $scope.duplicate = duplicate;
  $scope.searchByQuery = searchByQuery;
  $scope.searchArchived = searchArchived;

  activate();

  function activate() {
    return loadDemandSources();
  }

  function loadDemandSources() {
    return DemandSourcesService.getList(queryParams)
      .then(function success(list) {
        $scope.demandSources = list;
      }, function error() {
        console.log(ctrlName + ': ' +
          'Unable to load demand sources.',
          arguments
        );
      });
  }

  function setEnabled(model, isEnabled) {
    return model.patch({
        enabled: isEnabled,
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

    return loadDemandSources();
  }

  function searchArchived(archived) {
    if (archived) {
      queryParams.archived = archived;
    } else {
      delete queryParams.archived;
    }

    return loadDemandSources();
  }

}]);
