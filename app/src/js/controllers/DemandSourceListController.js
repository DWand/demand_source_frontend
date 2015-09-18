DemandSources_mp.controller('DemandSourceListController', ['$scope', '$state', 'HelperService', function($scope, $state, HelperService) {

  $scope.alphabet = HelperService.getAlphabet();


  console.log($scope, HelperService);

}]);
