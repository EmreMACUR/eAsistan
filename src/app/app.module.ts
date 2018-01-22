import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {DownloadDocPage} from '../pages/download-doc/download-doc'
import {SendMessagePage} from '../pages/send-message/send-message';

import {UserService} from '../services/userService';
import {LessonsService} from '../services/lessonsService';
import {docDownloadService} from '../services/docDownloadService';
import {MessageService} from '../services/messageService';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DownloadDocPage,
    SendMessagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DownloadDocPage,
    SendMessagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    LessonsService,
    docDownloadService,
    MessageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
