/// <reference path="../../../app/_boot/ref.d.ts" />
module App.Web {

    class rainGridController<T> {

        static $inject = ['$scope', '$rootScope', 'rainGridService'];

        constructor(private $scope:IRainGridScope, private $rootScope:ng.IRootScopeService,
                    private rainGridService:IRainGridService) {

            this.$scope.$watch('rainGrid.data', ()=> {
                this.activate();
            });

            //this.$scope.filterData = this.filterData;
            this.$scope.linkTo = this.linkTo;
            this.$scope.selectRow = this.selectRow;
            this.$scope.deleteRecord = this.deleteRecord;
            this.$scope.editRecord = this.editRecord;
        }


        private _dataRows = []; // _dataRows is original(neither sorted nor filtered)
        private _dataList = []; // _dataList might be sorted and/or filtered
        private _sortingOptions = [null, 'ASC', 'DSC'];
        private _currentSortIndex = 0;
        private _currentSortField = null;
        private _isFiltered = false;
        private _dataRowsFiltered = [];

        activate():void {
            var self = this;
            this.buildGridOptions();
            if (this.$scope.gridOptions.data) {
                this.$scope.gridOptions.data.then(
                    function (dataList) {
                        self.initRainGrid(dataList);
                    }
                )
            }
        }

        buildGridOptions():void {
            var gridOptions = {enablePage: true, pageSize: 10, selectable: false, showToolMenu: true};
            this.$scope.gridOptions = <IGridOptions> _.assign(gridOptions, this.$scope.rainGrid);
            this.$scope.selectable = this.$scope.gridOptions.selectable;
            this.$scope.actionButtonPlace = 0;
            this.$scope.showToolMenu = this.$scope.gridOptions.showToolMenu;
            this.$scope.title = this.$scope.gridOptions.title;

            this.setActionButtons();
        }

        initRainGrid(dataList):void {
            this.$scope.gridOptions.dataList = dataList;
            this.$scope.gridData = this.getGridData(this.$scope.gridOptions);
            this.$scope.sortField = null;
            this.$scope.sortOrder = null;
            this.$scope.currentPage = 1;
            this.initPage();
            this.initData(this.$scope.gridData);
            this.rainGridService.setPaginationIcons();
            //cfpLoadingBar.complete();
        }

        // delete and edit buttons
        setActionButtons():void {
            if (this.$scope.gridOptions.deleteLink && this.$scope.gridOptions.deleteLink.enable) {
                this.$scope.showDeleteButton = true;
                if (!!this.$scope.gridOptions.deleteLink.place) {
                    this.$scope.actionButtonPlace = this.$scope.gridOptions.deleteLink.place
                } else {
                    for (var i = 0; i < this.$scope.gridOptions.columnDefs.length; i++) {
                        if (!this.$scope.gridOptions.columnDefs[i].isHidden) {
                            this.$scope.actionButtonPlace = i;
                            break;
                        }
                    }
                }
                this.$scope.deleteEvent = this.$scope.gridOptions.deleteLink.funcEvent;
                this.$scope.deleteEventIdField = this.$scope.gridOptions.deleteLink.funcIdField;
            }
            if (this.$scope.gridOptions.editLink && this.$scope.gridOptions.editLink.enable) {
                this.$scope.showEditButton = true;
                if (!!this.$scope.gridOptions.editLink.place) {
                    this.$scope.actionButtonPlace = this.$scope.gridOptions.editLink.place
                } else {
                    for (var j = 0; j < this.$scope.gridOptions.columnDefs.length; j++) {
                        if (!this.$scope.gridOptions.columnDefs[j].isHidden) {
                            this.$scope.actionButtonPlace = j;
                            break;
                        }
                    }
                }
                this.$scope.editEvent = this.$scope.gridOptions.editLink.funcEvent;
                this.$scope.editEventIdField = this.$scope.gridOptions.editLink.funcIdField;
            }
        }

        initPage():void {
            var self = this;
            this.$scope.enablePage = this.$scope.gridOptions.enablePage;
            this.$scope.currentPage = 1;
            this.$scope.maxSize = 2;
            this.$scope.pageSizes = [
                {label: ' 5', value: 5},
                {label: '10', value: 10},
                {label: '15', value: 15},
                {label: '20', value: 20}
            ];
            this.$scope.pageSize = this.$scope.pageSizes[1];
            if (this.$scope.gridOptions.pageSize) {
                var pageSize = _.find(this.$scope.pageSizes, function (size) {
                    return size.value == self.$scope.gridOptions.pageSize;
                });
                if (pageSize) {
                    this.$scope.pageSize = pageSize;
                }
            }

        }



        initData(gridData):void {

            this.$scope.currentPage = 1;
            this._currentSortIndex = 0;
            this._currentSortField = null;

            this._dataRows = gridData.rows;

            this.$scope.header = gridData.header;
            this.$scope.rowCount = this._dataRows.length;
            this.$scope.enablePage = this.$scope.gridOptions.enablePage
                && (this.$scope.rowCount > this.$scope.pageSizes[0].value);

            // _dataRows is original(neither sorted nor filtered), _dataList might be sorted and/or filtered;
            this._dataList = this._dataRows;
            this.getPageData(this._dataList);
        }

        getPageData(dataList:Array<IGridRow>):Array<IGridRow> {
            var self = this;
            if (!this.$scope.enablePage) {
                this.$scope.list = dataList;
                return this.$scope.list;
            }
            var pagedDataList = this.rainGridService.getDataListByPage(dataList, this.$scope.currentPage,
                this.$scope.pageSize.value);

            if (pagedDataList) {
                this.$scope.list = pagedDataList;
                angular.forEach(this.$scope.list, function (row) {
                    if (row.rowSelected) {
                        if (row != self.$scope.selectedRow) {
                            row.rowSelected = false;
                        }
                    }
                })
            }
            return this.$scope.list;
        }

        // Building the header and rows
        getGridData(gridOptions):IGridData {
            var gridList = this.rainGridService.buildGridData(gridOptions);
            if (gridList.rows.length > 0 && gridList.rows[0].rowSelected) {
                this.$scope.selectedRow = gridList.rows[0];
            }
            return gridList;
        }   // end of getGridData


        // page event handlers

        linkTo(row:Array<IField>, funcEvent:string, funcIdField:string):void {
            // execute the link function of this field
            var field = _.find(row, function (col:IField) {
                return col.field === funcIdField;
            });
            if (field) {
                var id = field.value;
                this.$rootScope.$broadcast(funcEvent, {id: id});
            }
        }

        pageSizeChanged(pageSize:number):void {
            this.$scope.currentPage = 1;
            this.getPageData(this._dataList);
        }

        pageChanged():void {
            this.getPageData(this._dataList);
        }

        sortingChanged(sortField:string):void {
            var sortingOption = SortingOptions.NONE;
            if (this._currentSortField !== sortField) {
                this._currentSortIndex = 1;
                sortingOption = SortingOptions.ASC;
            } else {
                this._currentSortIndex = this._currentSortIndex + 1;
                sortingOption = SortingOptions.DSC;
                if (this._currentSortIndex > 2) {
                    this._currentSortIndex = 0;
                    sortingOption = SortingOptions.NONE;
                }
            }
            this._currentSortField = sortField;
            this.$scope.sortField = sortField;
            this.$scope.sortOrder = this._sortingOptions[this._currentSortIndex];

            var rows = this._isFiltered ? this._dataRowsFiltered : this._dataRows;
            this._dataList = this.rainGridService.sortData(rows, this._currentSortField, sortingOption);
            this.getPageData(this._dataList);
        }

        selectRow(row:IGridRow) {
            if (!this.$scope.selectable) {
                return;
            }
            var isSelected = row.rowSelected;
            angular.forEach(this.$scope.list, function (row:IGridRow) {
                row.rowSelected = false;
            });
            row.rowSelected = !isSelected;
            if (row.rowSelected) {
                this.$scope.selectedRow = row;
            }
            if (row.rowSelected && this.$scope.gridOptions.rowSelectedEvent) {
                var funcEvent = this.$scope.gridOptions.rowSelectedEvent.funcEvent;
                this.$rootScope.$broadcast(funcEvent, {id: row.id});
            }

        }

        deleteRecord(row:IGridRow):void {
            if (this.$scope.deleteEvent && this.$scope.deleteEventIdField) {
                var field = _.find(row.fields, (col)=> {
                    return col.field == this.$scope.deleteEventIdField;
                });
                if (field) {
                    var deleteEventIdField = field.value;
                    this.$rootScope.$broadcast(this.$scope.deleteEvent, {id: deleteEventIdField});
                }
            }
        }

        editRecord(row:IGridRow):void {
            if (this.$scope.editEvent && this.$scope.editEventIdField) {
                var field = _.find(row.fields, (col)=> {
                    return col.field == this.$scope.editEventIdField;
                });
                if (field) {
                    var editEventIdField = field.value;
                    this.$rootScope.$broadcast(this.$scope.editEvent, {id: editEventIdField});
                }
            }
        }
        /*

         filterData(filters:Array<IGridFilter>):void {
         this._dataList = this.rainGridService.filterData(this._dataRows, filters);

         this._isFiltered = (filters.length > 0 && !!filters[0].col);
         if (this._isFiltered) {
         this._dataRowsFiltered = this._dataList;
         }

         // after filtering, remove sorting and go to the first page
         this.$scope.rowCount = this._dataList.length;
         this.$scope.enablePage = this.$scope.gridOptions.enablePage
         && (this.$scope.rowCount > this.$scope.pageSizes[0].value);
         this.$scope.sortField = null;
         this.$scope.sortOrder = null;
         this.$scope.currentPage = 1;
         this.getPageData(this._dataList);
         }        
        */
    }

    angular.module(Constants.MAIN_MODULE).controller('rainGrid.controller', rainGridController);
}