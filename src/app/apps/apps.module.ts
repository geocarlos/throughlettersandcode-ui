import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsComponent } from './apps/apps.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AppsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AppsComponent
  ]
})
export class AppsModule { }
