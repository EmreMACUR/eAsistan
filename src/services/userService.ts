import { Injectable } from '@angular/core';

import { USER } from '../mocks/mock-user';

@Injectable()
export class UserService {

  constructor() { }
  getUser() {
    return new Promise((resolve, reject) => { 
      if(USER){
        resolve(USER);
      }else{
        reject(false); 
      }
             
    });
  }  
}
