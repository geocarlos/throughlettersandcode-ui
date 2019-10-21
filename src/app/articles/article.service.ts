import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../core/models';
import { environment } from 'src/environments/environment';
import { TlcHttp } from '../security/tlc-http.service';
import { AppLanguage } from '../app.language';

export class ArticleFilter {
  title: string;
  content: string;
  createdDate: Date;
  page: 0;
  itemsPerPage: 10;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  language = AppLanguage.getLanguage();

  articlesUrl = `${environment.apiUrl}/articles`;

  constructor(private http: TlcHttp, private httpClient: HttpClient) {
  }

  get(filter: ArticleFilter): Promise<any> {

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    const params = new HttpParams()
      .set('page', filter.page.toString())
      .set('size', filter.itemsPerPage.toString())
      .set('content', filter.content || '');

    return this.httpClient.get(`${this.articlesUrl}?language=${this.language}`, { headers, params }).toPromise();
  }

  delete(codigo: number): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    return this.http.delete(`${this.articlesUrl}/${codigo}`, { headers }).toPromise();
  }

  create(article: Article): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=')
      .append('Content-Type', 'application/json');

    return this.http.post(this.articlesUrl,
        JSON.stringify(article), { headers })
      .toPromise();
  }

  update(article: Article): Promise<Article> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=')
      .append('Content-Type', 'application/json');

    return this.http.put(`${this.articlesUrl}/${article.id}`,
        JSON.stringify(article), { headers })
      .toPromise()
      .then(response => {
        const changedArticle = response as Article;

        return changedArticle;
      });
  }

  getById(id: number): Promise<Article> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.httpClient.get(`${this.articlesUrl}/${id}`, { headers })
      .toPromise()
      .then(response => {
        const article = response as Article;
        window.document.title = article.title;
        return article;
      });
  }

}
