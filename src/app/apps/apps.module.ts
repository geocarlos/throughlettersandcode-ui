import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsComponent } from './apps/apps.component';

@NgModule({
  declarations: [AppsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AppsComponent
  ]
})
export class AppsModule { }
