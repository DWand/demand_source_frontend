DemandSources_mp.controller('MainController', ['$scope', '$state', function($scope, $state) {
  console.log('Main', $scope, $state);

  $scope.page = {
    title: 'Main',
    entity: {
      id: 123567890
    }
  };

}]);
