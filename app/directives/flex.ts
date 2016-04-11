/// <reference path="../../app/_boot/ref.d.ts" />
module App.Web {

    export class FlexRowDirective implements ng.IDirective {

        restrict = 'AC';
        replace = true;
        scope = {
        };
        link = (scope: ng.IScope, element: ng.IAugmentedJQuery): void => {
            element.addClass('flex_row_v_center');
        }
    }

    angular.module(Constants.MAIN_MODULE).directive('flexRow', () => new FlexRowDirective());

    export class FlexColumnDirective implements ng.IDirective {

        restrict = 'AC';
        replace = true;
        scope = {
        };
        link = (scope: ng.IScope, element: ng.IAugmentedJQuery): void => {
            element.addClass('flex_column_h_center');
        }
    }

    angular.module(Constants.MAIN_MODULE).directive('flexColumn', () => new FlexColumnDirective());


    interface IFlexScope extends ng.IScope{
        flex: number;
    }
    export class FlexDirective implements ng.IDirective {

        restrict = 'A';
        replace = true;
        scope = {
            flex: '='
        };
        link = (scope: IFlexScope, element: ng.IAugmentedJQuery): void => {
            //element.addClass('flex');
            element.css({ 'flex-basis': scope.flex+'%' });
        }
    }

    angular.module(Constants.MAIN_MODULE).directive('flex', () => new FlexDirective());
}
