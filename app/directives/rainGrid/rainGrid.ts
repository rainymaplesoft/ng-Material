/// <reference path="../../../app/_boot/ref.d.ts" />
module App.Web {

    export interface IGridCellLinkFunc {
        funcIdField:string,
        funcEvent:string
    }
    export interface IColumnDefs {
        field: string,
        displayName: string,
        isHidden?: boolean,
        isLink?:boolean,
        isCurrency?:boolean,
        isNumber?:boolean,
        decimal?:number,
        isCheckbox?:boolean,
        isBoolean?:boolean,
        isButton?:boolean,
        isIcon?:boolean,
        isDate?:boolean,
        order?:number,
        linkFunc?:IGridCellLinkFunc
    }
    export interface IGridRowLink {
        funcEvent:string,
        funcIdField:string,
        enable:boolean,
        place:number
    }

    export interface IRowSelectedEvent {
        funcEvent: string, funcIdField:string
    }

    export interface IGridOptions {
        idField:string,
        title:string,
        columnDefs:Array<IColumnDefs>,
        data?:ng.IPromise<any>,
        dataList?:Array<any>
        selectable?:boolean,
        selectFirstRow?:boolean,
        showToolMenu?:boolean,
        enablePage?:boolean,
        pageSize?:number,
        deleteLink?:IGridRowLink,
        editLink?:IGridRowLink,
        rowSelectedEvent?:IRowSelectedEvent
    }

    export interface IPageSize {
        label:string,
        value:number
    }

    export interface IField extends IColumnDefs {
        id?:string,
        value: any,
    }

    export interface IIdField  {
        idFieldName?:string,
        idFieldValue: any,
    }

    export interface IGridRow {
        fields: Array<IField>, rowSelected: boolean, idField: string, id: string
    }

    export interface IGridHeader {
        fieldName:string,
        displayName:string,
        isHidden:boolean
    }
    export interface IGridData {
        rows:Array<IGridRow>,
        header:Array<IGridHeader>
    }

   /* export interface IGridFilter {
        col:IFilterColumn,
        constraint:IConstraint,
        expression:string
    }*/
    export interface IRainGridScope extends ng.IScope {
        rainGrid:IGridOptions,
        gridOptions:IGridOptions,
        selectable:boolean,
        actionButtonPlace:number,
        showToolMenu:boolean,
        title:string,
        sortField:string,
        sortOrder:string,
        currentPage:number,
        showDeleteButton:boolean,
        gridData:IGridData,
        list:Array<IGridRow>,
        selectedRow:IGridRow,
        deleteEvent:string,
        deleteEventIdField:string,
        editEvent:string,
        editEventIdField:string,
        showEditButton:boolean,
        enablePage:boolean,
        maxSize:number,
        pageSize:IPageSize,
        pageSizes:Array<IPageSize>,
        rowCount:number,
        header:string,
        //filterData(filters:Array<IGridFilter>):void,
        linkTo(row:Array<IField>, funcEvent:string, funcIdField:string):void,
        pageSizeChanged (pageSize:number) :void,
        pageChanged ():void,
        sortingChanged(sortField:string):void,
        selectRow (row:IGridRow):void,
        deleteRecord (row:IGridRow):void,
        editRecord (row:IGridRow):void
    }

    class RainGrid {
        constructor() {

        }

        restrict = 'AE';
        templateUrl = 'rainModules/rainGrid/_rainGridTemplate.html';
        replace = false;
        scope = {
            rainGrid: '='
        };
        controller = 'rainGrid.controller';
        controllerAs = 'vm';
    }

    angular.module(Constants.MAIN_MODULE).directive('rainGrid', () => new RainGrid());

}