DemandSources_mp.controller('DomainListEditController', [
'$scope', '$state', '$q', 'DomainListsService',
function($scope, $state, $q, DomainListsService) {

  var ctrlName = $state.current.controller;
  console.log(ctrlName, $scope, $state, this);

  var id = $state.params.id;

  $scope.domainList = null;

  $scope.save = saveModel;
  $scope.addDomain = addDomain;
  $scope.delDomain = delDomain;
  $scope.clearList = clearList;
  $scope.exportList = exportList;
  $scope.deleteDomainList = deleteDomainList;

  activate();

  function activate() {
    return loadDomainList();
  }

  function loadDomainList() {
    return getDomainListPromise()
      .then(function success(obj) {
        $scope.domainList = obj;
      }, function error() {
        console.log(ctrlName + ': ' +
          'Unable to load domain list.',
          arguments
        );
      });
  }

  function getDomainListPromise() {
    if (id) {
      return DomainListsService.get(id);
    } else {
      return $q.when(DomainListsService.create());
    }
  }

  function saveModel() {
    if ($scope.domainList) {
      return $scope.domainList.save();
    }
  }

  function addDomain(domainName) {
    if (!$scope.domainList) {
      return;
    }

    $scope.domainList.domains.push(domainName);
  }

  function delDomain(domain) {
    if (!$scope.domainList) {
      return;
    }

    var domains = $scope.domainList.domains;
    var index = domains.indexOf(domain);
    if (index !== -1) {
      domains.splice(index, 1);
    }
  }

  function clearList() {
    if ($scope.domainList) {
      $scope.domainList.domains = [];
    }
  }

  function exportList() {
    if ($scope.domainList) {
      return $scope.domainList.exportListModel();
    }
  }

  function deleteDomainList() {
    if (!$scope.domainList) {
      return;
    }

    $scope.domainList.remove()
      .then(function success() {
        $state.go('domain_list');
      }, function error() {
        console.log(ctrlName + ': ' +
          'Unable to delete domain list.',
          arguments
        );
      });
  }

}]);
