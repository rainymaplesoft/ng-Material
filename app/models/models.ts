/// <reference path="../../app/_boot/ref.d.ts" />
module App.Web {

    export interface IMenuSection {
        name:string,
        state:string,
        type:string,
        pages?:IMenuSection[],
        icon?:string
    }
    
    export class Student {
        studentId:string;
        firstName:string;
        lastName:string;
        schoolName:string;
    }

    export class Objective {
        studentKey:number;
        objectiveKey:number;
        name:string;
        description:string;
        attainmentDate:string;
        dataCaptureStatusKey:number;
        iepObjective:boolean;
        otObjective:boolean;
    }
}
