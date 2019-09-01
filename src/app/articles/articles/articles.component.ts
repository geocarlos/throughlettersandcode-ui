import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ArticleService, ArticleFilter } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles = [];

  filter = new ArticleFilter();

  constructor(
    public auth: AuthService,
    private articleService: ArticleService,
    private errorHandler: ErrorHandlerService) { }

  getPreview(content: string) {
    const preview = content.replace(/<\/?\w+>/g, '').substring(0, 140);
    return content.length > preview.length ? `${preview}...` : preview;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.filter.page = 0;
    this.filter.itemsPerPage = 10;
    this.articleService.get(this.filter)
    .then(response => {this.articles = response.content; console.log(response.content); })
    .catch(error => this.errorHandler.handle(error));
  }

}
