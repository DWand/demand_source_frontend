DemandSources_mp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");

    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "../../build/views/scenario_list.html",
            controller: 'ScenarioListController'
        });
}]);
