import { SendMessagePage } from '../send-message/send-message';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from 'ionic-angular';

import { lesson } from '../../objects/lesson';
import { LessonsService } from '../../services/lessonsService';
import { UserService } from '../../services/userService';
import { DownloadDocPage } from '../download-doc/download-doc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  implements OnInit { 
  
  userObj: any;
  lessons: lesson[] = [];

  constructor(private navCtrl: NavController,private userService: UserService,
    private actionSheetCtrl: ActionSheetController,private lessonsService: LessonsService ) {

  } 
  ngOnInit() {
    this.getUser();
    this.getLessons();
  }

  getUser(): void {
    this.userService.getUser().then(
      (data) => {
        this.userObj=data;
      },
      (error) =>  { 
        console.log(error);
      },
    ); 
  }
   
    getLessons(): void {
      this.lessonsService.getLessons()
        .subscribe(Lessons => this.lessons = Lessons);
    }

  showLessonDetail (lesson) : void{    
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Merhaba '+this.userObj.name+" " +lesson.name +" dersi için hangi işlemi yapmak istersin ?",
      buttons: [
        {
          text: 'Döküman Linklerine Git',
          icon: 'cloud-download',
          handler: () => {
            this.navigateToPage(1,lesson);
            console.log('Döküman Linklerine Git');
          }
        },{
          text: 'Öğretmene Soru Sor',
          icon:'chatbubbles',
          handler: () => {
            this.navigateToPage(2,lesson);
            console.log('Öğretmene Soru Sor');
          }
        },{
          text: 'Vazgeç',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  
  navigateToPage(destType,lesson) : void{
    if(destType==1){
      this.navCtrl.push(DownloadDocPage,{lesson:lesson,user:this.userObj});
    }else if(destType==2){
      // console.log(JSON.stringify(lesson));
      // console.log(JSON.stringify(this.userObj));
      this.navCtrl.push(SendMessagePage,{lesson:lesson,user:this.userObj});
    }else{
      console.log("undefined choice");
    }
    
  }
}
 