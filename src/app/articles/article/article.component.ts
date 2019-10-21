import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/core/models';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {

  article: Article;
  language: string;

  constructor(
    private articleService: ArticleService,
    public auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private errorHandler: ErrorHandlerService) { }

    deleteArticle(id: number) {
      this.articleService.delete(id)
      .then(() => {
        window.alert('Article has been deleted.');
        this.router.navigateByUrl('/articles');
      })
      .catch(error => this.errorHandler.handle(error));
    }

    ngOnInit() {
      window.scrollTo(0, 0);
      this.articleService.getById(this.route.snapshot.params.id)
      .then(response => this.article = response)
      .catch(error => this.errorHandler.handle(error));
    }

    ngOnDestroy(): void {
      window.document.title = 'Through Letters & Code';
    }
}
