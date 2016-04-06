/// <reference path="ref.d.ts" />
module App.Web {
    class AppRoute {
        static $inject = [
            NGGlobal.$STATEPROVIDER,
            NGGlobal.$URLROUTERPROVIDER
        ];

        constructor($stateProvider:angular.ui.IStateProvider,
                    $urlRouterProvider:angular.ui.IUrlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('home', {
                    url: '/',
                    template:'<home></home>'

                    /*views: {

                        '@': {
                            templateUrl: 'home.view.html',
                            controller: 'HomeCtrl as vm'
                        }
                    }*/
                });
/*                .state('home.beers', {
                    url: 'beers',
                    abstract: true
                })
                .state('home.beers.ipas', {
                    url: '/ipas',

                    views: {

                        'content@home': {
                            templateUrl: 'beers.ipa.view.html'
                        }
                    }
                })
                .state('home.beers.porters', {
                    url: '/porters',

                    views: {

                        'content@home': {
                            templateUrl: 'beers.porters.view.html'
                        }
                    }
                })
                .state('home.beers.wheat', {
                    url: '/porters',

                    views: {

                        'content@home': {
                            templateUrl: 'beers.wheat.view.html'
                        }
                    }
                })*/
        }


    }
    angular.module(Constants.MAIN_MODULE).config(AppRoute)
        //take all whitespace out of string
        .filter('nospace', function () {
            return function (value) {
                return (!value) ? '' : value.replace(/ /g, '');
            };
        })
        //replace uppercase to regular case
        .filter('humanizeDoc', function () {
            return function (doc) {
                if (!doc) return;
                if (doc.type === 'directive') {
                    return doc.name.replace(/([A-Z])/g, function ($1) {
                        return '-' + $1.toLowerCase();
                    });
                }

                return doc.label || doc.name;
            };
        });
}