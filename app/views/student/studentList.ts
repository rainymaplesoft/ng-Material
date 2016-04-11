/// <reference path="../../../app/_boot/ref.d.ts" />
module App.Web {

    const _studentController = 'studentListController';

    /** --  Directive -- **/
    class StudentListDirective {
        restrict = 'AE';
        templateUrl = 'views/student/studentList.html';
        replace = false;
        scope = {};
        controller = _studentController;
        controllerAs = 'vm';

    }

    angular.module(Constants.MAIN_MODULE).directive("studentList",
        () => new StudentListDirective());

    class studentListController {
        constructor(){
            this.gridOptions = this.setGridOptions();
        }
        gridOptions:IGridOptions;

        setGridOptions() {
            return {
                columnDefs: this.getColumnDefs(),
                title: "Student",
                enablePage: true,
                idField: 'studentId',
                selectable: false
            };
        }

        /*
         "studentId": "1",
         "firstName": "first",
         "lastName": "sil1st",
         "schoolName": "School A"
        */

        getColumnDefs() {
        return [
            {
                field: 'studentId',
                displayName: 'Id'
            }, {
                field: 'firstName',
                displayName: 'First Name',
                isLink: true
            },
            {
                field: 'lastName',
                displayName: 'Last Name'
            },
            {
                field: 'schoolName',
                displayName: 'School Name'
            }
        ];
    }
    }

    angular.module(Constants.MAIN_MODULE).controller(_studentController, studentListController);

}