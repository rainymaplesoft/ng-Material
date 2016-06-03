/// <reference path="../../../app/_boot/ref.d.ts" />
module App.Web {


    const _homeController = 'homeController';

    /** --  Directive -- *
     class Directive {
        restrict = 'AE';
        templateUrl = 'views/home/home.html';
        replace = true;
        scope = {};
        controller = _homeController;
        controllerAs = 'vm';

    }
     angular.module(Constants.MAIN_MODULE).directive(Constants.DIRECTIVE_HOME, () => new Directive());
     */
    class Component {
        templateUrl = 'views/home/home.html';
        controller = _homeController;
        controllerAs = 'vm';
        $routeConfig:[
            { path:'/studentlist',component:'studentList',name:'studentlist'},
            {path:'/**',redirectTo:['studentList']}
            ];

    }
    angular.module(Constants.MAIN_MODULE).directive(Constants.COMPONENT_HOME, () => new Component());

    class homeController {

    }

    angular.module(Constants.MAIN_MODULE).controller(_homeController, homeController);

}