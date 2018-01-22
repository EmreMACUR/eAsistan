import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DownloadDocPage } from './download-doc';

@NgModule({
  declarations: [
    DownloadDocPage,
  ],
  imports: [
    IonicPageModule.forChild(DownloadDocPage),
  ],
})
export class DownloadDocPageModule {}
