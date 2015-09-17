DemandSources_mp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/scenario");

    $stateProvider
        .state('app.scenario.list', {
            url: "/scenario",
            templateUrl: '../views/scenario_list.html',
            controller: 'ScenarioListController'
        })

        .state('app.scenario.edit', {
          url: '/scenario/:id',
          templateUrl: '../views/scenario_edit.html',
          controller: 'ScenarioEditController'
        })

        .state('app.demand_source.list', {
            url: "/demand_source",
            templateUrl: '../views/demand_source_list.html',
            controller: 'DemandSourceListController'
        })

        .state('app.demand_source.edit', {
          url: '/demand_source/:id',
          templateUrl: '../views/demand_source_edit.html',
          controller: 'DemandSourceEditController'
        })

        .state('app.domain_list.list', {
          url: '/domain_list',
          templateUrl: '../views/domain_list.html',
          controller: 'DomainListController'
        })

        .state('app.domain_list.edit', {
          url: '/domain_list/:id',
          templateUrl: 'domain_list_edit.html',
          controller: 'DomainListEditController'
        });
}]);
