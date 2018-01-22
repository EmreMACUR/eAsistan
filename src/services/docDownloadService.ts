import { Injectable } from '@angular/core';

@Injectable()
export class docDownloadService {

  constructor() { }
  
  downloadDoc(url:string) {
    return new Promise((resolve, reject) => { 
      if(url){
        resolve(true);
      }else{
        reject(false); 
      }
             
    });
  }  
}
