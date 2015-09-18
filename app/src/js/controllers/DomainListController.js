DemandSources_mp.controller('DomainListController', [
'$scope', '$state', 'DomainListsService',
function($scope, $state, DomainListsService) {

  var ctrlName = $state.current.controller;
  console.log(ctrlName, $scope, $state, this);

  var queryParams = {};

  $scope.domainLists = [];

  $scope.setArchived = setArchived;
  $scope.duplicate = duplicate;
  $scope.searchByQuery = searchByQuery;
  $scope.searchArchived = searchArchived;

  activate();

  function activate() {
    return loadDomainLists();
  }

  function loadDomainLists() {
    return DomainListsService.getList(queryParams)
      .then(function success(list) {
        $scope.domainLists = list;
      }, function error() {
        console.log(ctrlName + ': ' +
          'Unable to load domain lists.',
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

    return loadDomainLists();
  }

  function searchArchived(archived) {
    if (archived) {
      queryParams.archived = archived;
    } else {
      delete queryParams.archived;
    }

    return loadDomainLists();
  }

}]);
