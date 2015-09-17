DemandSources_mp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/scenario");

    $stateProvider
        .state('scenario', {
            url: "/scenario",
            templateUrl: '../views/scenario_list.html',
            controller: 'ScenarioListController'
        })

        .state('scenario_edit', {
          url: '/scenario/:id',
          templateUrl: '../views/scenario_edit.html',
          controller: 'ScenarioEditController'
        })

        .state('demand_source', {
            url: "/demand_source",
            templateUrl: '../views/demand_source_list.html',
            controller: 'DemandSourceListController'
        })

        .state('demand_source_edit', {
          url: '/demand_source/:id',
          templateUrl: '../views/demand_source_edit.html',
          controller: 'DemandSourceEditController'
        })

        .state('domain_list', {
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
