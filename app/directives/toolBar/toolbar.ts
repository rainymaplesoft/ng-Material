/// <reference path="../../../app/_boot/ref.d.ts" />
module App.Web {

    const _toolbarController = 'toolbarController';
    interface IScope extends ng.IScope {
        getToolbarWidth():number;
        title:string;
    }

    class ToolbarDirective {
        restrict = 'AE';
        templateUrl = 'directives/toolbar/toolbar.html';
        replace = true;
        scope = {
            title:'@'
        };
        controller = _toolbarController;
        controllerAs = 'vm';
        link = (scope:IScope, element:ng.IAugmentedJQuery, attr:ng.IAttributes)=> {
            scope.getToolbarWidth = ()=> {
                let toolbarWidth = $('.toolbar-container').width() - $('.toggle-menu').width() - 20;
                $('.md-toolbar-tools').width(toolbarWidth);
                return toolbarWidth;
            }
        }
    }
    angular.module(Constants.MAIN_MODULE).directive(Constants.DIRECTIVE_TOOLBAR, () => new ToolbarDirective());

    class ToolbarController {
        static $inject = [NGGlobal.$SCOPE, NGGlobal.MD_SIDE_NAV, NGGlobal.WINDOW_SERVICE, NGGlobal.MD_MEDIA];

        constructor(private scope:IScope, private $mdSideNav:angular.material.ISidenavService,
                    private $window:angular.IWindowService, private $mdMedia:angular.material.IMedia) {
            let self = this;
            let window = angular.element($window);
            window.bind('resize', ()=>self.scope.$apply());

            this.scope.$watch(
                ()=> $window.innerWidth,
                function (newValue, oldValue) {
                    let w = self.scope.getToolbarWidth();
                    //console.log(w);
                });
        }

        toggleSideNav() {
            //'left' is the id of the side menu
            this.$mdSideNav('left').toggle();
        }
    }

    angular.module(Constants.MAIN_MODULE).controller(_toolbarController, ToolbarController);
}