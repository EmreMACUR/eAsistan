import {downloadLink} from './downloadLink';
export class lesson{
    id:number;
    name:string;
    teacherId:number;
    teacherNameSurname:string;
    credit:number;
    notesLink:downloadLink [];
    questionsLink:downloadLink [];
}