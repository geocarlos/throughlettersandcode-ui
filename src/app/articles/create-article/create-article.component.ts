import { Component, OnInit } from '@angular/core';
import { Article, Category } from 'src/app/core/models';
import { CategoryService } from 'src/app/categories/category.service';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  isNewCategoryFormShown = false;

  article = new Article();

  categories = [];

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService) { }

  showNewCategoryForm() {
    this.isNewCategoryFormShown = !this.isNewCategoryFormShown;
  }

  createArticle(e) {
    e.preventDefault();
    this.article.language = e.target.language.value;
    this.article.category = new Category();
    this.article.category.id = e.target.category.value;
    this.article.createdDate = new Date();
    this.article.author.id = 1;
    console.log(this.article);
    this.articleService.create(this.article);

  }

  getCategories() {
    this.categoryService.listAll()
    .then(response => this.categories = response)
    .catch(error => console.log(error));
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
