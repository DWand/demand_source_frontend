DemandSources_mp.controller('MainController', ['$scope', '$state', function($scope, $state) {
  console.log('Main', $scope);

  $scope.page = {
    title: 'Main',
    entity: {
      id: 123567890
    }
  };

}]);
