import { Component, OnInit } from '@angular/core';
import { Article, Category } from 'src/app/core/models';
import { CategoryService } from 'src/app/categories/category.service';
import { ArticleService } from '../article.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  isNewCategoryFormShown = false;

  article = new Article();
  form: FormGroup;

  categories = [];

  constructor(
    private articleService: ArticleService,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService) { this.form = this.formBuilder.group(({
      language: [null]
    })); }

  showNewCategoryForm() {
    this.isNewCategoryFormShown = !this.isNewCategoryFormShown;
  }

  compare(val1, val2) {
    return val1.id === val2.id;
  }

  configureForm() {
    this.form = this.formBuilder.group({
      id: [],
      title: [null, Validators.required],
      content: [null, [Validators.required, Validators.minLength(100)]],
      language: ['en', Validators.required],
      category: this.formBuilder.group({
          id: [1, Validators.required]
        }),
      author: this.formBuilder.group({
        id: [1, Validators.required]
      })

    });
  }

  createArticle() {
    this.article = this.form.value;
    this.article.createdDate = new Date();
    this.articleService.create(this.article)
    .then(() => window.alert('New article created'))
    .catch(() => window.alert('problem creating new article'));
  }

  getCategories() {
    this.categoryService.listAll()
    .then(response => this.categories = response)
    .catch(error => console.log(error));
  }

  ngOnInit(): void {
    this.getCategories();
    this.configureForm();
  }
}
