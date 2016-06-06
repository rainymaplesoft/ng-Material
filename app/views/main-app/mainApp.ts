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
        templateUrl = 'views/main-app/main-app.html';
        //controller = _homeController;
        //controllerAs = 'vm';
        $routeConfig = [
            {path: '/studentlist', component: Constants.COMPONENT_STUDENT_LIST, name: 'StudentList'},
            {path: '/about', component: 'appAbout', name: 'About'},
            {path: '/**', redirectTo: ['StudentList']}
        ];

    }
    angular.module(Constants.MAIN_MODULE).component(Constants.COMPONENT_MAIN_APP, new Component());

    class homeController {

    }

    angular.module(Constants.MAIN_MODULE).controller(_homeController, homeController);

}