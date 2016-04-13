/// <reference path="../../../app/_boot/ref.d.ts" />
module App.Web {
    const _sideMenuController = 'sideMenuController';


    /** --  Directive -- **/
    class SideMenuDirective {
        restrict = 'AE';
        templateUrl = 'directives/menu/menu.html';
        replace = true;
        scope = {};
        link = (scope:ng.IScope, element:ng.IAugmentedJQuery)=> {
            /* var controller = element.parent().controller();

             scope.focusSection = function () {
             // set flag to be used later when
             // $locationChangeSuccess calls openPage()
             controller.autoFocusContent = true;
             };*/
        };

        controller = _sideMenuController;
        controllerAs = 'vm';
    }

    angular.module(Constants.MAIN_MODULE).directive(Constants.DIRECTIVE_SIDE_MENU, () => new SideMenuDirective());

    export interface ISideMenuController {
        isOpen(section:IMenuSection):boolean,
        toggleOpen(section:IMenuSection):void,
        autoFocusContent:boolean;
        navigate(state:string):void;
    }

    class sideMenuController implements ISideMenuController {

        static $inject = [Constants.SERVICE_MOCKDATA, NGGlobal.$STATESERVICE, NGGlobal.MD_SIDE_NAV];

        constructor(private mockDataService:IMockDataService, private state:ng.ui.IStateService,
                    private $mdSideNav:angular.material.ISidenavService) {
            this.autoFocusContent = false;
        }

        menu:IMenuSection[] = this.mockDataService.GetMenuSections();

        public openedSection:IMenuSection;

        public autoFocusContent:boolean;

        public isOpen(section:IMenuSection):boolean {
            return this.openedSection === section;
        }

        public toggleOpen(section:IMenuSection):void {
            this.openedSection = this.openedSection === section ? null : section;
        }

        public navigate(state:string) {
            let sideMenu =this.$mdSideNav('left');
            this.state.go(state);
            // close the side menu if it's in the narrow screen mode
            if(!sideMenu.isLockedOpen() && sideMenu.isOpen()){
                sideMenu.toggle();
            }
        }
    }

    angular.module(Constants.MAIN_MODULE).controller(_sideMenuController, sideMenuController);
}