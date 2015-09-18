DemandSources_mp.controller('DemandSourceEditController', [
'$scope', '$state', '$q', 'DemandSourcesService',
function($scope, $state, $q, DemandSourcesService) {

  var ctrlName = $state.current.controller;
  console.log(ctrlName, $scope, $state, this);

  var id = $state.params.id;

  $scope.demandSource = null;

  $scope.save = saveModel;
  $scope.addTargetinfFilter = addTargetingFilter;
  $scope.delTargetingFilter = delTargetingFilter;

  activate();

  function activate() {
    return loadDemandSource();
  }

  function loadDemandSource() {
    return getDemandSourcePromise()
      .then(function success(obj) {
        $scope.demandSource = obj;
      }, function error() {
        console.log(ctrlName + ': ' +
          'Unable to load demand source.',
          arguments
        );
      });
  }

  function getDemandSourcePromise() {
    if (id) {
      return DemandSourcesService.get(id);
    } else {
      return $q.when(DemandSourcesService.create());
    }
  }

  function saveModel() {
    if ($scope.demandSource) {
      return $scope.demandSource.save();
    }
  }

  function addTargetingFilter() {
    if (!$scope.demandSource) {
      return;
    }

    $scope.demandSource.targeting.filters.push({});
  }

  function delTargetingFilter(filter) {
    if (!$scope.demandSource) {
      return;
    }

    var filters = $scope.demandSource.targeting.filters;
    var index = filters.indexOf(filter);
    if (index !== -1) {
      filters.splice(index, 1);
    }
  }

}]);
