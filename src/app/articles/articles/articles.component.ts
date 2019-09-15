import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ArticleService, ArticleFilter } from '../article.service';
import { getPreview } from 'src/app/core/helpers';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles = [];

  filter = new ArticleFilter();

  getPreview = getPreview;

  private isRequestedCompleted = false;

  constructor(
    public auth: AuthService,
    private articleService: ArticleService,
    private errorHandler: ErrorHandlerService) { }

  get noArticles(): boolean {
    return this.articles.length < 1 && this.isRequestedCompleted;
  }

  get isLoading(): boolean {
    return !this.isRequestedCompleted;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.filter.page = 0;
    this.filter.itemsPerPage = 10;
    this.articleService.get(this.filter)
    .then(response => {this.articles = response.content.reverse(); })
    .catch(error => this.errorHandler.handle(error))
    .finally(() => {
      this.isRequestedCompleted = true;
    });
  }

}
