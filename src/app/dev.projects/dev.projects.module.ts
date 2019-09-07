import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevProjectsComponent } from './dev.projects/dev.projects.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DevProjectsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DevProjectsComponent
  ]
})
export class DevProjectsModule { }
