/// <reference path="../../../app/_boot/ref.d.ts" />
module App.Web {

    export var baseUrl = 'rainModules/rainGrid/';

    export enum SortingOptions {NONE, ASC, DSC}

    /*export enum ConstraintType{EqualsTo, GreaterThan, LessThan, Contains, StartsWith}*/

    export var FilterConstraint = {
        EqualsTo: {label: 'equal to', value: 'EqualsTo'},
        GreaterThan: {label: 'greater than', value: 'GreaterThan'},
        LessThan: {label: 'less than', value: 'LessThan'},
        Contains: {label: 'Contains', value: 'Contains'},
        StartsWith: {label: 'starts with', value: 'StartsWith'}
    };

    export interface IRainGridService {
        setPaginationIcons():void;
        getDataListByPage(dataList:Array<any>, page:number, pageSize:number):Array<IGridRow>;
        buildGridData(gridOptions:IGridOptions):IGridData;
        sortData(dataList:Array<any>, sortField:string, sortOrder:SortingOptions):Array<IGridRow>
        //getFilterConstraintsByColumnType(col:IFilterColumn):Array<IConstraint>
        //showFilterModal(gridOptions:IGridOptions, filters:Array<IGridFilter>):ng.IPromise<any>;
        //filterData(dataRows:Array<IGridRow>, filters:Array<IGridFilter>):Array<IGridRow>;
    }
    export class RainGridService<T> implements IRainGridService {

        static $inject = ['$parse'];

        constructor(private $parse:ng.IParseService) {
        }

        setPaginationIcons():void {
            $('ul.pagination a:contains("<<"):first').html("<i class='fa fa-angle-double-left page-arrow'></i>");
            $('ul.pagination a:contains(">>"):first').html("<i class='fa fa-angle-double-right page-arrow'></i>");
            $('ul.pagination a:contains("<"):first').html("<i class='fa fa-angle-left page-arrow'></i>");
            $('ul.pagination a:contains(">"):first').html("<i class='fa fa-angle-right page-arrow'></i>");
        }

        getDataListByPage(dataList:Array<IGridRow>, page:number, pageSize:number):Array<IGridRow> {
            // page starts with 1
            if (!dataList || page <= 0) {
                return null;
            }
            try {
                //dataList = sortData(dataList);

                var start = (page - 1) * pageSize;
                var pagedData = _.slice(dataList, start, start + pageSize);
                if (!pagedData) {
                    return null;
                }
                return pagedData;
            } catch (e) {
                console.log(e.message);
                return null;
            }
        }

        buildHeader(columnDefs:Array<IColumnDefs>):Array<IGridHeader> {
            var row = [];
            angular.forEach(columnDefs, function (col:IColumnDefs) {
                row.push({
                    fieldName: col.field,
                    displayName: col.displayName,
                    isHidden: col.isHidden
                });
            });
            return row;
        }   // end of buildHeader

        buildGridData(gridOptions:IGridOptions):IGridData {
            var list = gridOptions.dataList;
            var columnDefs = gridOptions.columnDefs;
            var idField = null;
            var id = null;


            var gridList = {rows: [], header: this.buildHeader(columnDefs)};
            if (list.length == 0) {
                return gridList;
            }
            gridList.rows = _.map(list, function (rowData) {
                var fields:Array<IField> = [];
                if (!columnDefs) {
                    for (var property in rowData) {
                        if (rowData.hasOwnProperty(property)) {
                            fields.push(
                                {
                                    field: property,
                                    value: rowData[property],
                                    displayName: property
                                });
                        }
                    }
                } else {
                    idField = gridOptions.idField;
                    if (idField) {
                        id = rowData[gridOptions.idField];
                    }
                    for (var i = 0; i < columnDefs.length; i++) {
                        var col = columnDefs[i];
                        var gridData:IField = {
                            id: rowData[gridOptions.idField],
                            field: col.field,
                            value: (rowData[col.field] === null || rowData[col.field] === undefined)
                                ? '' : rowData[col.field],
                            displayName: col.displayName,
                            isCheckbox: col.isCheckbox,
                            isCurrency: col.isCurrency,
                            isNumber: col.isNumber,
                            decimal: col.decimal,
                            isLink: col.isLink,
                            isButton: col.isButton,
                            isIcon: col.isIcon,
                            isDate: col.isDate,
                            isHidden: col.isHidden || false,
                            linkFunc: col.linkFunc || {funcEvent: '', funcIdField: ''},
                            order: i
                        };
                        fields.push(gridData);
                    }
                }
                var gridRow:IGridRow = {fields: fields, rowSelected: false, idField: idField, id: id};
                return gridRow;
            });
            if (gridOptions.selectFirstRow && gridList.rows.length > 0) {
                gridList.rows[0].rowSelected = true;
            }

            return gridList;
        }   // end of buildGridData

        sortData(dataList:Array<IGridRow>, sortField:string, sortOrder:SortingOptions):Array<IGridRow> {

            if (!sortField || sortOrder === SortingOptions.NONE) {
                return dataList;
            }
            var sortedData = _.sortBy(dataList, function (row:IGridRow) {
                var rowData = row.fields;
                var sortedValue = null;
                for (var i = 0; i < rowData.length; i++) {
                    if (rowData[i].field === sortField) {
                        sortedValue = rowData[i].value;
                        return sortedValue;
                    }
                }
            });
            return sortOrder === SortingOptions.ASC ? sortedData : sortedData.reverse();
        }   // end of sortData


    }
    angular.module(Constants.MAIN_MODULE).service('rainGridService', RainGridService);
}
