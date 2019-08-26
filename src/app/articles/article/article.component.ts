import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/core/models';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.articleService.getById(this.route.snapshot.params.id)
    .then(response => this.article = response)
    .catch(error => this.errorHandler.handle(error));
  }

}
