/// <reference path="ref.d.ts" />
module App.Web {
    angular.module(Constants.MAIN_MODULE,
        [
            NGGlobal.NG_MATARIAL,
            NGGlobal.NG_MATARIAL_ICONS,
            NGGlobal.UIROUTER

        ])
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .accentPalette('deep-purple');
        });
}