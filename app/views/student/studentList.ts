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

    angular.module(Constants.MAIN_MODULE).directive(Constants.COMPONENT_STUDENT_LIST,
        () => new StudentListDirective());

    class studentListController {
        static $inject = [Constants.SERVICE_REPOSITORY, Constants.SERVICE_MOCKDATA];

        constructor(private repositoryService:IRepositoryService, private mockService:IMockDataService) {
            this.gridOptions = this.setGridOptions();
            //let studentData = repositoryService.getData<Student[]>('url');
            this.gridOptions.data = mockService.GetStudents();
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