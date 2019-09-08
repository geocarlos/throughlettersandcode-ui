import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevProjectsComponent } from './dev.projects/dev.projects.component';
import { SharedModule } from '../shared/shared.module';
import { CreateDevProjectComponent } from './create-dev-project/create-dev-project.component';
import { DevProjectComponent } from './dev-project/dev-project.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DevProjectsComponent, CreateDevProjectComponent, DevProjectComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    DevProjectsComponent
  ]
})
export class DevProjectsModule { }
