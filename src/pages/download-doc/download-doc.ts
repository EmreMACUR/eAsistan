import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { lesson } from '../../objects/lesson';
import { user } from '../../objects/user';

/**
 * Generated class for the DownloadDocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-download-doc',
  templateUrl: 'download-doc.html',
})
export class DownloadDocPage {
  currentLesson:lesson;
  currentUser:user;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentLesson = navParams.get('lesson');
    this.currentUser = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloadDocPage');
    console.log(JSON.stringify(this.currentLesson));
    console.log('ionViewDidLoad DownloadDocPage');
    console.log(JSON.stringify(this.currentUser));
  }

  clickedItem ():void{
    alert("cliked");
  }
}
