/// <reference path="../../../app/_boot/ref.d.ts" />
module App.Web {
    const _sideMenuController = 'sideMenuController';

    export interface IMenuSection {
        name:string,
        state:string,
        type:string,
        pages?:IMenuSection[],
        icon?:string
    }


    /** --  Directive -- **/
    class SideMenuDirective {
        restrict = 'AE';
        templateUrl = 'directives/menu/menu.html';
        replace = true;
        scope = {};
        link = (scope:ng.IScope, element:ng.IAugmentedJQuery)=> {
            /* var controller = element.parent().controller();

             scope.focusSection = function () {
             // set flag to be used later when
             // $locationChangeSuccess calls openPage()
             controller.autoFocusContent = true;
             };*/
        };

        controller = _sideMenuController;
        controllerAs ='vm';
    }

    angular.module(Constants.MAIN_MODULE).directive(Constants.DIRECTIVE_SIDE_MENU, () => new SideMenuDirective());

    export interface ISideMenuController{
        isOpen(section:IMenuSection):boolean,
        toggleOpen(section:IMenuSection):void,
        autoFocusContent:boolean
    }
    
    class sideMenuController implements ISideMenuController{

        constructor() {
            this.autoFocusContent=false;
        }

        menu:IMenuSection[] = this.getMenuSections();

        public openedSection:IMenuSection;

        public autoFocusContent:boolean;

        public isOpen(section:IMenuSection):boolean {
            var aa = this.openedSection === section;
            return this.openedSection === section;
        }

        public toggleOpen(section:IMenuSection):void {
            this.openedSection = this.openedSection === section ? null : section;
        }

        //
        private getMenuSections():IMenuSection[] {

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
                            state: '',
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
    }

    angular.module(Constants.MAIN_MODULE).controller(_sideMenuController, sideMenuController);
}