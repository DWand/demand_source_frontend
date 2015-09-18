angular.module('DemandSources_mp').run([
'DemandSourcesService',
'DomainListsService',
'ScenariosService',
'TargetingInfoBrowsersService',
'TargetingInfoDevicesService',
'TargetingInfoDomainsService',
'TargetingInfoGeosService',
'TargetingInfoPlatformsService',
'TargetingInfoPublishersService',
'TargetingInfoOssService',
'Restangular',
function(
    DemandSourcesService,
    DomainListsService,
    ScenariosService,
    TargetingInfoBrowsersService,
    TargetingInfoDevicesService,
    TargetingInfoDomainsService,
    TargetingInfoGeosService,
    TargetingInfoPlatformsService,
    TargetingInfoPublishersService,
    TargetingInfoOssService,
    Restangular
) {

    window.api = {
        demand_sources: DemandSourcesService,
        domain_lists: DomainListsService,
        scenarios: ScenariosService,
        info_browsers: TargetingInfoBrowsersService,
        info_devices: TargetingInfoDevicesService,
        info_domains: TargetingInfoDomainsService,
        info_geos: TargetingInfoGeosService,
        info_platforms: TargetingInfoPlatformsService,
        info_publishers: TargetingInfoPublishersService,
        info_oss: TargetingInfoOssService,
        setBasePath: setBasePath,
    };

    function setBasePath(path) {
        Restangular.setBaseUrl(path);
    }

}]);
