import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleCreateComponent } from './article-create/article-create.component';

@NgModule({
  declarations: [ArticlesComponent, ArticleCreateComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ArticlesComponent
  ]
})
export class ArticlesModule { }
