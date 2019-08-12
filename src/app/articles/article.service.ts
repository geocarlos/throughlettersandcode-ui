import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../core/models';
import { environment } from 'src/environments/environment';

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

  articlesUrl = `${environment.apiUrl}/articles`;

  constructor(private http: HttpClient) { }

  get(filter: ArticleFilter): Promise<any> {

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    const params = new HttpParams()
      .set('page', filter.page.toString())
      .set('size', filter.itemsPerPage.toString())
      .set('content', filter.content || '');

    return this.http.get(`${this.articlesUrl}`, { headers, params }).toPromise();
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

    return this.http.get(`${this.articlesUrl}/${id}`, { headers })
      .toPromise()
      .then(response => {
        const article = response as Article;

        return article;
      });
  }

}
