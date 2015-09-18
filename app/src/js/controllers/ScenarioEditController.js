DemandSources_mp.controller('ScenarioEditController', [
'$scope', '$state', '$q', 'ScenariosService', 'DemandSourcesService',
function($scope, $state, $q, ScenariosService, DemandSourcesService) {

  var ctrlName = $state.current.controller;
  console.log(ctrlName, $scope, $state, this);

  var id = $state.params.id;
  var demandSourcesQueryParams = {};

  $scope.scenario = null;
  $scope.demandSources = [];

  $scope.save = saveModel;
  $scope.searchDemandSourcesByQuery = searchDemandSourcesByQuery;
  $scope.addTier = addTier;
  $scope.delTier = delTier;

  activate();

  function activate() {
    return $q.all(
      loadScenario(),
      loadDemandSources()
    );
  }

  function loadScenario() {
    return getScenarioPromise()
      .then(function success(obj) {
        $scope.scenario = obj;
      }, function error() {
        console.log(ctrlName + ': ' +
          'Unable to load scenario.',
          arguments
        );
      });
  }

  function getScenarioPromise() {
    if (id) {
      return ScenariosService.get(id);
    } else {
      return $q.when(ScenariosService.create());
    }
  }

  function loadDemandSources() {
    return DemandSourcesService.getList(demandSourcesQueryParams)
      .then(function success(list) {
        $scope.demandSources = list;
      }, function error() {
        console.log(ctrlName + ': ' +
          'Unable to load demand sources.',
          arguments
        );
      });
  }

  function saveModel() {
    if ($scope.scenario) {
      return $scope.scenario.save();
    }
  }

  function searchDemandSourcesByQuery(query) {
    if (query) {
      demandSourcesQueryParams.search = query;
    } else {
      delete demandSourcesQueryParams.search;
    }

    return loadDemandSources();
  }

  function addTier() {
    if (!$scope.scenario) {
      return;
    }

    $scope.scenario.tiers.push({});
  }

  function delTier(tier) {
    if (!$scope.scenario) {
      return;
    }

    var tiers = $scope.scenario.tiers;
    var index = tiers.indexOf(tier);
    if (index !== -1) {
      tiers.splice(index, 1);
    }
  }

}]);
