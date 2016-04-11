/// <reference path="../_boot/ref.d.ts" />
module App.Web {
    export interface IMockDataService {
        GetData<T>(modelName):Array<T>;
    }
    export class MockDataService implements IMockDataService{

        // ----------- Mock Data -------------

        public GetData<T>(modelName) {
            var data = [];
            switch (modelName.toLowerCase()) {
                case "menu":
                    data = App.Web.MockDataService.getMenuSections();
                    break;
                case "student":
                    data = App.Web.MockDataService.getStudents();
                    break;
                case "objective":
                    data = App.Web.MockDataService.getObjectives();
                    break;
                default :
                    break;
            }

            return data;
        }

        private static getMenuSections():IMenuSection[] {

            return [
                {
                    name: 'Get Started',
                    state: '',
                    type: 'link',
                },
                {
                    name: 'Data Collection',
                    state: '',
                    type: 'toggle',
                    pages: [
                        {
                            name: 'DC 01',
                            state: '',
                            type: 'link',
                        },
                        {
                            name: 'DC 02',
                            state: '',
                            type: 'link',
                        },
                        {
                            name: 'DC 03',
                            state: '',
                            type: 'link',
                        }
                    ]
                },
                {
                    name: 'Student Management',
                    state: '',
                    type: 'toggle',
                    pages: [
                        {
                            name: 'Student List',
                            state: 'student_list',
                            type: 'link',
                        },
                        {
                            name: 'Student Group',
                            state: '',
                            type: 'link',
                        },
                        {
                            name: 'Student 03',
                            state: '',
                            type: 'link',
                        }
                    ]
                },
                {
                    name: 'Report',
                    state: '',
                    type: 'toggle',
                    pages: [
                        {
                            name: 'Central/School',
                            state: '',
                            type: 'link',
                        },
                        {
                            name: 'Teach Classroom',
                            state: '',
                            type: 'link',
                        },
                        {
                            name: 'Parent/Student',
                            state: '',
                            type: 'link',
                        },
                        {
                            name: 'Monthly Verification',
                            state: '',
                            type: 'link',
                        },
                        {
                            name: 'Data Collection',
                            state: '',
                            type: 'link',
                        }
                    ]
                },
                {
                    name: 'Offline',
                    state: '',
                    type: 'link',
                },
                {
                    name: 'Settings',
                    state: '',
                    type: 'link',
                }

            ];
        }

        private static getStudents():Student[] {
            return [
                {
                    "studentId": "1",
                    "firstName": "first",
                    "lastName": "sil1st",
                    "schoolName": "School A"
                }, {"studentId": "2", "firstName": "second", "lastName": "sil2nd", "schoolName": "School A"}, {
                    "studentId": "3",
                    "firstName": "3rd",
                    "lastName": "sil3rd",
                    "schoolName": "School A"
                }, {"studentId": "4", "firstName": "4th", "lastName": "sil4th", "schoolName": "School A"}, {
                    "studentId": "5",
                    "firstName": "\tF\t5\t ",
                    "lastName": "\tL\t5\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "6",
                    "firstName": "\tF\t6\t ",
                    "lastName": "\tL\t6\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "7",
                    "firstName": "\tF\t7\t ",
                    "lastName": "\tL\t7\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "8",
                    "firstName": "\tF\t8\t ",
                    "lastName": "\tL\t8\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "9",
                    "firstName": "\tF\t9\t ",
                    "lastName": "\tL\t9\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "10",
                    "firstName": "\tF\t10\t ",
                    "lastName": "\tL\t10\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "11",
                    "firstName": "\tF\t11\t ",
                    "lastName": "\tL\t11\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "12",
                    "firstName": "\tF\t12\t ",
                    "lastName": "\tL\t12\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "13",
                    "firstName": "\tF\t13\t ",
                    "lastName": "\tL\t13\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "14",
                    "firstName": "\tF\t14\t ",
                    "lastName": "\tL\t14\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "15",
                    "firstName": "\tF\t15\t ",
                    "lastName": "\tL\t15\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "16",
                    "firstName": "\tF\t16\t ",
                    "lastName": "\tL\t16\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "17",
                    "firstName": "\tF\t17\t ",
                    "lastName": "\tL\t17\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "18",
                    "firstName": "\tF\t18\t ",
                    "lastName": "\tL\t18\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "19",
                    "firstName": "\tF\t19\t ",
                    "lastName": "\tL\t19\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "20",
                    "firstName": "\tF\t20\t ",
                    "lastName": "\tL\t20\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "21",
                    "firstName": "\tF\t21\t ",
                    "lastName": "\tL\t21\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "22",
                    "firstName": "\tF\t22\t ",
                    "lastName": "\tL\t22\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "23",
                    "firstName": "\tF\t23\t ",
                    "lastName": "\tL\t23\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "24",
                    "firstName": "\tF\t24\t ",
                    "lastName": "\tL\t24\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "25",
                    "firstName": "\tF\t25\t ",
                    "lastName": "\tL\t25\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "26",
                    "firstName": "\tF\t26\t ",
                    "lastName": "\tL\t26\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "27",
                    "firstName": "\tF\t27\t ",
                    "lastName": "\tL\t27\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "28",
                    "firstName": "\tF\t28\t ",
                    "lastName": "\tL\t28\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "29",
                    "firstName": "\tF\t29\t ",
                    "lastName": "\tL\t29\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "30",
                    "firstName": "\tF\t30\t ",
                    "lastName": "\tL\t30\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "31",
                    "firstName": "\tF\t31\t ",
                    "lastName": "\tL\t31\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "32",
                    "firstName": "\tF\t32\t ",
                    "lastName": "\tL\t32\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "33",
                    "firstName": "\tF\t33\t ",
                    "lastName": "\tL\t33\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "34",
                    "firstName": "\tF\t34\t ",
                    "lastName": "\tL\t34\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "35",
                    "firstName": "\tF\t35\t ",
                    "lastName": "\tL\t35\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "36",
                    "firstName": "\tF\t36\t ",
                    "lastName": "\tL\t36\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "37",
                    "firstName": "\tF\t37\t ",
                    "lastName": "\tL\t37\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "38",
                    "firstName": "\tF\t38\t ",
                    "lastName": "\tL\t38\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "39",
                    "firstName": "\tF\t39\t ",
                    "lastName": "\tL\t39\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "40",
                    "firstName": "\tF\t40\t ",
                    "lastName": "\tL\t40\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "41",
                    "firstName": "\tF\t41\t ",
                    "lastName": "\tL\t41\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "42",
                    "firstName": "\tF\t42\t ",
                    "lastName": "\tL\t42\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "43",
                    "firstName": "\tF\t43\t ",
                    "lastName": "\tL\t43\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "44",
                    "firstName": "\tF\t44\t ",
                    "lastName": "\tL\t44\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "45",
                    "firstName": "\tF\t45\t ",
                    "lastName": "\tL\t45\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "46",
                    "firstName": "\tF\t46\t ",
                    "lastName": "\tL\t46\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "47",
                    "firstName": "\tF\t47\t ",
                    "lastName": "\tL\t47\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "48",
                    "firstName": "\tF\t48\t ",
                    "lastName": "\tL\t48\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "49",
                    "firstName": "\tF\t49\t ",
                    "lastName": "\tL\t49\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "50",
                    "firstName": "\tF\t50\t ",
                    "lastName": "\tL\t50\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "51",
                    "firstName": "\tF\t51\t ",
                    "lastName": "\tL\t51\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "52",
                    "firstName": "\tF\t52\t ",
                    "lastName": "\tL\t52\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "53",
                    "firstName": "\tF\t53\t ",
                    "lastName": "\tL\t53\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "54",
                    "firstName": "\tF\t54\t ",
                    "lastName": "\tL\t54\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "55",
                    "firstName": "\tF\t55\t ",
                    "lastName": "\tL\t55\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "56",
                    "firstName": "\tF\t56\t ",
                    "lastName": "\tL\t56\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "57",
                    "firstName": "\tF\t57\t ",
                    "lastName": "\tL\t57\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "58",
                    "firstName": "\tF\t58\t ",
                    "lastName": "\tL\t58\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "59",
                    "firstName": "\tF\t59\t ",
                    "lastName": "\tL\t59\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "60",
                    "firstName": "\tF\t60\t ",
                    "lastName": "\tL\t60\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "61",
                    "firstName": "\tF\t61\t ",
                    "lastName": "\tL\t61\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "62",
                    "firstName": "\tF\t62\t ",
                    "lastName": "\tL\t62\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "63",
                    "firstName": "\tF\t63\t ",
                    "lastName": "\tL\t63\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "64",
                    "firstName": "\tF\t64\t ",
                    "lastName": "\tL\t64\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "65",
                    "firstName": "\tF\t65\t ",
                    "lastName": "\tL\t65\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "66",
                    "firstName": "\tF\t66\t ",
                    "lastName": "\tL\t66\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "67",
                    "firstName": "\tF\t67\t ",
                    "lastName": "\tL\t67\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "68",
                    "firstName": "\tF\t68\t ",
                    "lastName": "\tL\t68\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "69",
                    "firstName": "\tF\t69\t ",
                    "lastName": "\tL\t69\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "70",
                    "firstName": "\tF\t70\t ",
                    "lastName": "\tL\t70\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "71",
                    "firstName": "\tF\t71\t ",
                    "lastName": "\tL\t71\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "72",
                    "firstName": "\tF\t72\t ",
                    "lastName": "\tL\t72\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "73",
                    "firstName": "\tF\t73\t ",
                    "lastName": "\tL\t73\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "74",
                    "firstName": "\tF\t74\t ",
                    "lastName": "\tL\t74\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "75",
                    "firstName": "\tF\t75\t ",
                    "lastName": "\tL\t75\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "76",
                    "firstName": "\tF\t76\t ",
                    "lastName": "\tL\t76\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "77",
                    "firstName": "\tF\t77\t ",
                    "lastName": "\tL\t77\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "78",
                    "firstName": "\tF\t78\t ",
                    "lastName": "\tL\t78\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "79",
                    "firstName": "\tF\t79\t ",
                    "lastName": "\tL\t79\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "80",
                    "firstName": "\tF\t80\t ",
                    "lastName": "\tL\t80\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "81",
                    "firstName": "\tF\t81\t ",
                    "lastName": "\tL\t81\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "82",
                    "firstName": "\tF\t82\t ",
                    "lastName": "\tL\t82\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "83",
                    "firstName": "\tF\t83\t ",
                    "lastName": "\tL\t83\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "84",
                    "firstName": "\tF\t84\t ",
                    "lastName": "\tL\t84\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "85",
                    "firstName": "\tF\t85\t ",
                    "lastName": "\tL\t85\t ",
                    "schoolName": "School B"
                }, {
                    "studentId": "86",
                    "firstName": "\tF\t86\t ",
                    "lastName": "\tL\t86\t ",
                    "schoolName": "School B"
                }, {
                    "studentId": "87",
                    "firstName": "\tF\t87\t ",
                    "lastName": "\tL\t87\t ",
                    "schoolName": "School B"
                }, {
                    "studentId": "88",
                    "firstName": "\tF\t88\t ",
                    "lastName": "\tL\t88\t ",
                    "schoolName": "School B"
                }, {
                    "studentId": "89",
                    "firstName": "\tF\t89\t ",
                    "lastName": "\tL\t89\t ",
                    "schoolName": "School B"
                }, {
                    "studentId": "90",
                    "firstName": "\tF\t90\t ",
                    "lastName": "\tL\t90\t ",
                    "schoolName": "School C"
                }, {
                    "studentId": "91",
                    "firstName": "\tF\t91\t ",
                    "lastName": "\tL\t91\t ",
                    "schoolName": "School C"
                }, {
                    "studentId": "92",
                    "firstName": "\tF\t92\t ",
                    "lastName": "\tL\t92\t ",
                    "schoolName": "School C"
                }, {
                    "studentId": "93",
                    "firstName": "\tF\t93\t ",
                    "lastName": "\tL\t93\t ",
                    "schoolName": "School C"
                }, {
                    "studentId": "94",
                    "firstName": "\tF\t94\t ",
                    "lastName": "\tL\t94\t ",
                    "schoolName": "School C"
                }, {
                    "studentId": "95",
                    "firstName": "\tF\t95\t ",
                    "lastName": "\tL\t95\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "96",
                    "firstName": "\tF\t96\t ",
                    "lastName": "\tL\t96\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "97",
                    "firstName": "\tF\t97\t ",
                    "lastName": "\tL\t97\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "98",
                    "firstName": "\tF\t98\t ",
                    "lastName": "\tL\t98\t ",
                    "schoolName": "School A"
                }, {
                    "studentId": "99",
                    "firstName": "b nombre",
                    "lastName": "b apell",
                    "schoolName": "School A"
                }, {
                    "studentId": "100",
                    "firstName": "z nombre ",
                    "lastName": "z apell",
                    "schoolName": "School A"
                }, {
                    "studentId": "101",
                    "firstName": "a nombre",
                    "lastName": "a apell",
                    "schoolName": "School A"
                }, {
                    "studentId": "102",
                    "firstName": "z nombre",
                    "lastName": "a apell",
                    "schoolName": "School A"
                }, {
                    "studentId": "103",
                    "firstName": "a nombre",
                    "lastName": "z aspell",
                    "schoolName": "School A"
                },
                {
                    "studentId": "104",
                    "firstName": "\tF\t104\t ",
                    "lastName": "\tL\t104\t ",
                    "schoolName": "School A"
                }];
        }

        private static getObjectives():Objective[] {
            return [
                {
                    "studentKey": 2,
                    "objectiveKey": 112,
                    "name": "This is the first objective",
                    "description": 'objective description first one',
                    "attainmentDate": "2040-09-24T00:00:00",
                    "dataCaptureStatusKey": 1,
                    "iepObjective": false,
                    "otObjective": false
                }, {
                    "studentKey": 1,
                    "objectiveKey": 160,
                    "name": "Testing session #",
                    "description": null,
                    "attainmentDate": "2013-11-29T00:00:00",
                    "dataCaptureStatusKey": 3,
                    "iepObjective": false,
                    "otObjective": false
                }, {
                    "studentKey": 2,
                    "objectiveKey": 167,
                    "name": "Test Not Presented",
                    "description": null,
                    "attainmentDate": "2013-10-30T00:00:00",
                    "dataCaptureStatusKey": 3,
                    "iepObjective": false,
                    "otObjective": false
                }, {
                    "studentKey": 2,
                    "objectiveKey": 169,
                    "name": "Test Not Presented 3",
                    "description": null,
                    "attainmentDate": "2013-10-31T00:00:00",
                    "dataCaptureStatusKey": 3,
                    "iepObjective": false,
                    "otObjective": false
                }, {
                    "studentKey": 2,
                    "objectiveKey": 170,
                    "name": "Ceiling Test - Number",
                    "description": null,
                    "attainmentDate": "2013-11-30T00:00:00",
                    "dataCaptureStatusKey": 3,
                    "iepObjective": false,
                    "otObjective": false
                }, {
                    "studentKey": 2,
                    "objectiveKey": 171,
                    "name": "Ceiling Test - Rate",
                    "description": null,
                    "attainmentDate": "2014-01-28T00:00:00",
                    "dataCaptureStatusKey": 3,
                    "iepObjective": false,
                    "otObjective": false
                }, {
                    "studentKey": 1,
                    "objectiveKey": 172,
                    "name": "aaaaaa",
                    "description": "as asa sas as asas as asas asas as sasasasas as as as as as asa sas asa sas asasasasas asa sas as sas as as as as as asas asasasasas as as as as as as sasa sasasas sasa sas as as as a sa sa sa sasasa end !!",
                    "attainmentDate": "2014-12-01T00:00:00",
                    "dataCaptureStatusKey": 5,
                    "iepObjective": false,
                    "otObjective": false
                }, {
                    "studentKey": 1,
                    "objectiveKey": 173,
                    "name": "Multi Skil Areas",
                    "description": null,
                    "attainmentDate": "2013-12-28T00:00:00",
                    "dataCaptureStatusKey": 1,
                    "iepObjective": false,
                    "otObjective": false
                }, {
                    "studentKey": 23,
                    "objectiveKey": 174,
                    "name": "aaaaa",
                    "description": "jhjhjh",
                    "attainmentDate": "2014-10-30T00:00:00",
                    "dataCaptureStatusKey": 5,
                    "iepObjective": false,
                    "otObjective": false
                }, {
                    "studentKey": 1,
                    "objectiveKey": 175,
                    "name": "aaaaaaaa",
                    "description": null,
                    "attainmentDate": "2014-11-30T00:00:00",
                    "dataCaptureStatusKey": 1,
                    "iepObjective": false,
                    "otObjective": false
                }, {
                    "studentKey": 1,
                    "objectiveKey": 176,
                    "name": "dub-aaa",
                    "description": null,
                    "attainmentDate": "2014-11-30T00:00:00",
                    "dataCaptureStatusKey": 3,
                    "iepObjective": false,
                    "otObjective": false
                }];
        }
    }

    angular.module(Constants.MAIN_MODULE).service(Constants.SERVICE_MOCKDATA, MockDataService);
}