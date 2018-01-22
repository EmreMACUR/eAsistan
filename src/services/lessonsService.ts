import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { lesson } from '../objects/lesson';
import { Lessons } from '../mocks/mock-lessons'; 

@Injectable()
export class LessonsService {

  constructor() { }

  getLessons(): Observable<lesson[]> {
    return of(Lessons);
  }

}
