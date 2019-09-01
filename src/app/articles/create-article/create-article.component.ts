import { Component, OnInit } from '@angular/core';
import { Article, Category } from 'src/app/core/models';
import { CategoryService } from 'src/app/categories/category.service';
import { ArticleService } from '../article.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  isNewCategoryFormShown = false;

  form: FormGroup;

  categories = [];

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService) {
    this.form = this.formBuilder.group(({
      language: [null]
    }));
  }

  get isEditing() {
    return Boolean(this.form.get('id').value);
  }

  showNewCategoryForm() {
    this.isNewCategoryFormShown = !this.isNewCategoryFormShown;
  }

  configureForm() {
    this.form = this.formBuilder.group({
      id: [],
      title: [null, Validators.required],
      content: [null, [Validators.required, Validators.minLength(100)]],
      language: ['en', Validators.required],
      category: this.formBuilder.group({
        id: [1, Validators.required],
        name: []
      }),
      author: this.formBuilder.group({
        id: [1, Validators.required],
        username: [],
        firstName: [],
        lastName: [],
        email: []
      }),
      createdDate: [new Date(), Validators.required]
    });
  }

  saveArticle(): void {
    if (this.isEditing) {
      this.updateArticle();
    } else {
      this.createArticle();
    }
  }

  createArticle(): void {
    this.articleService.create(this.form.value)
      .then(() => window.alert('New article created'))
      .catch(() => window.alert('problem creating new article'));
  }

  updateArticle(): void {
    this.articleService.update(this.form.value)
      .then(() => window.alert('Article has been updated'))
      .catch(() => window.alert('problem creating new article'));
  }

  getCategories() {
    this.categoryService.listAll()
      .then(response => this.categories = response)
      .catch(error => console.log(error));
  }

  ngOnInit(): void {
    if (this.route.snapshot.params.id) {
      this.articleService.getById(this.route.snapshot.params.id)
        .then(response => {
          this.form.patchValue(response);
        })
        .catch(error => this.errorHandler.handle(error));
    }
    this.getCategories();
    this.configureForm();
  }
}
