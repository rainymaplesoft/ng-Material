/// <reference path="ref.d.ts" />
module App.Web {
    let module = angular.module(Constants.MAIN_MODULE,
        [
            NGGlobal.NG_MATARIAL,
            NGGlobal.NG_MATARIAL_ICONS,
            NGGlobal.NG_COMPONENT_ROUTER
            //NGGlobal.UIROUTER

        ]);

    /** tell the router the root of the router is 'mainApp' */
    module.value("$routerRootComponent",Constants.COMPONENT_MAIN_APP);

    module.config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('deep-purple');
    });

    module.component("appAbout",{
        template:"This is the about page"
    });
}