DemandSources_mp.controller('MainController', ['$scope', '$state', function($scope, $state) {
  console.log('Main', $scope, $state);

  $scope.state = $state;

  console.log('current', $scope.state);

}]);
