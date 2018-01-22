import { Injectable } from '@angular/core';

import { Messages } from '../mocks/mock-messages';

@Injectable()
export class MessageService {

  constructor() { }
  getMessage() {
    return new Promise((resolve, reject) => { 
      if(Messages){
        resolve(Messages);
      }else{
        reject(false); 
      }
             
    });
  }  
}
