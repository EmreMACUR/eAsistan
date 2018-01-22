import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { lesson } from '../../objects/lesson';
import { message } from '../../objects/message';
import { user } from '../../objects/user';
import { MessageService } from '../../services/messageService';
 

/**
 * Generated class for the SendMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send-message',
  templateUrl: 'send-message.html',
})
export class SendMessagePage implements OnInit{
  currentLesson:lesson;
  currentUser:user;
  messages : any ;
  msgText :string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private messageService: MessageService) {
    this.currentLesson = navParams.get('lesson');
    this.currentUser = navParams.get('user');
  }
  ngOnInit() {
    console.log(JSON.stringify(this.currentLesson));
    this.getMessages();
  }

  ionViewDidLoad() {
  }

  getMessages () : void{
    this.messageService.getMessage().then(
      (data) => {

        this.messages=data;
      },
      (error) =>  { 
        console.log(error);
      },
    ); 

  }
  

  sendMessage():void{
    let newMessage =new message();
    newMessage.text=this.msgText;
    newMessage.senderId=this.currentUser.id;
    newMessage.isOwner=true;
    newMessage.lessonId=this.currentLesson.id;
    this.msgText='';
    this.messages.push(newMessage);
    

    
  }

}
