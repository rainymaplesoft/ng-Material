/// <reference path="../../../app/_boot/ref.d.ts" />
module App.Web {

    const _sideMenu ='^'+Constants.DIRECTIVE_SIDE_MENU;

    interface IScope {
        isOpen():boolean,
        toggle():void,
        section:IMenuSection
    }

    /** --  Directive -- **/
    class MenuToggleDirective {
        restrict = 'AE';
        templateUrl = 'directives/menu/menu_toggle.html';
        replace = false;
        require = _sideMenu;
        scope = {
            section: '='
        };
        link = (scope:IScope, element:ng.IAugmentedJQuery, attr:ng.IAttributes, menuCtrl:ISideMenuController)=> {

            scope.isOpen = function () {
                return menuCtrl.isOpen(scope.section);
            };
            scope.toggle = function () {
                menuCtrl.toggleOpen(scope.section);
            };

            /*var parentNode = element[0].parentNode.parentNode.parentNode;
             if (parentNode.classList.contains('parent-list-item')) {
             var heading = parentNode.querySelector('h2');
             element[0].firstChild.setAttribute('aria-describedby', heading.id);
             }*/
        }
    }

    angular.module(Constants.MAIN_MODULE).directive(Constants.DIRECTIVE_MENU_TOGGLE, () => new MenuToggleDirective());

}