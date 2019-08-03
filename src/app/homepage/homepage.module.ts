import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ HomeComponent, AboutComponent ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    AboutComponent
  ]
})
export class HomepageModule { }
