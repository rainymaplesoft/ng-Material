/// <reference path="../../../app/_boot/ref.d.ts" />
module App.Web {

    const _sideMenu ='^'+Constants.DIRECTIVE_SIDE_MENU;
    
    interface IScope extends ng.IScope{
        selectItem():void;
        section:IMenuSection;
    }
    
    /** --  Directive -- **/
    class MenuLinkDirective {
        restrict = 'AE';
        templateUrl = 'directives/menu/menu_link.html';
        replace = false;
        require = _sideMenu;
        scope = {
            section: '='
        };
        link = (scope:IScope, element:ng.IAugmentedJQuery, attr:ng.IAttributes, menuCtrl:ISideMenuController)=> {

            scope.selectItem = function () {
                // set flag to be used later when
                // $locationChangeSuccess calls openPage()
                menuCtrl.autoFocusContent = true;
                if(scope.section.state){
                    menuCtrl.navigate(scope.section.state);
                }
            };
        }
    }

    angular.module(Constants.MAIN_MODULE).directive(Constants.DIRECTIVE_MENU_LINK, () => new MenuLinkDirective());

}