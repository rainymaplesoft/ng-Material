/// <reference path="../../../app/_boot/ref.d.ts" />
module App.Web {
    interface ICellScope extends ng.IScope {
        value:any;
        isDate?:boolean;
        isCurrency?:boolean;
        isNumber?:boolean;
        isCheckbox?:boolean;
        isLink?:boolean;
        isButton?:boolean;
        isIcon?:boolean;
        isHidden?:boolean;
        decimal?:number;
        linkEvent?:string;
        emitEvent():void;
    }
    class RainGridCell {
        restrict = "AE";
        templateUrl = "directives/rainGrid/rainGridCell.html";
        replace = false;
        scope = {
            value: '=',
            isDate: '=',
            isCurrency: '=',
            isNumber: '=',
            isCheckbox: '=',
            isLink: '=',
            isButton: '=',
            isIcon: '=',
            isHidden: '=',
            decimal: '=',
            linkEvent: '='
        };
        link = (scope:ICellScope, element:ng.IAugmentedJQuery)=> {
            scope.emitEvent = function () {
                if (scope.linkEvent) {
                    scope.$emit(scope.linkEvent);
                }
            };
        }
    }

    angular.module(Constants.MAIN_MODULE).directive('gridCell', () => new RainGridCell());
}