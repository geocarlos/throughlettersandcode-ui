import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { SharedModule } from '../shared/shared.module';
import { CreateArticleComponent } from './create-article/create-article.component';
import { CategoriesModule } from '../categories/categories.module';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [ArticlesComponent, CreateArticleComponent, ArticleComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CategoriesModule
  ],
  exports: [
    ArticlesComponent
  ]
})
export class ArticlesModule { }
