/// <reference path="ref.d.ts" />
module App.Web {
    class MainController {
        testNum:number =2;
        fillColor:string = '#90EE90;'
    }
    angular.module(Constants.MAIN_MODULE).controller('mainController', MainController);
}
//mainController