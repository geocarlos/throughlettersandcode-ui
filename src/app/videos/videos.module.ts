import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos/videos.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [VideosComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    VideosComponent
  ]
})
export class VideosModule { }
