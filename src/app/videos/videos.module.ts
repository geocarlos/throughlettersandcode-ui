import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos/videos.component';
import { SharedModule } from '../shared/shared.module';
import { CreateVideoComponent } from './create-video/create-video.component';

@NgModule({
  declarations: [VideosComponent, CreateVideoComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    VideosComponent
  ]
})
export class VideosModule { }
