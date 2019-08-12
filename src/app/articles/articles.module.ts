import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { CategoriesModule } from '../categories/categories.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ArticlesComponent, ArticleCreateComponent, CreateArticleComponent],
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
