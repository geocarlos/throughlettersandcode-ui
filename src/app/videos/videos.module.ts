import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos/videos.component';
import { SharedModule } from '../shared/shared.module';
import { CreateVideoComponent } from './create-video/create-video.component';
import { FormsModule } from '@angular/forms';
import { CategoriesModule } from '../categories/categories.module';

@NgModule({
  declarations: [VideosComponent, CreateVideoComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CategoriesModule
  ],
  exports: [
    VideosComponent
  ]
})
export class VideosModule { }
