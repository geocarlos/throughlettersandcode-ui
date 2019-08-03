import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ArticlesComponent
  ]
})
export class ArticlesModule { }
