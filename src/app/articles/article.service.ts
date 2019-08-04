import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../core/models';

export class ArticleFilter {
  title: string;
  content: string;
  createdDate: Date;
  page: 0;
  itemsPerPage: 2;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articlesUrl = 'http://localhost:8080/articles';

  constructor(private http: HttpClient) { }

  pesquisar(filter: ArticleFilter): Promise<any> {

    let headers = new HttpHeaders();
    let params = new HttpParams();

    params = params.set('page', filter.page.toString());
    params = params.set('size', filter.itemsPerPage.toString());

    headers = headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    if (filter.content) {
      params = params.set('content', filter.content);
    }

    return this.http.get(`${this.articlesUrl}`, { headers, params }).toPromise();
  }

  delete(codigo: number): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    return this.http.delete(`${this.articlesUrl}/${codigo}`, { headers }).toPromise();
  }

  create(article: Article): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers = headers.append('Content-Type', 'application/json');

    return this.http.post(this.articlesUrl,
        JSON.stringify(article), { headers })
      .toPromise();
  }

  update(article: Article): Promise<Article> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    headers = headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.articlesUrl}/${article.id}`,
        JSON.stringify(article), { headers })
      .toPromise()
      .then(response => {
        const changedArticle = response as Article;

        return changedArticle;
      });
  }

  getById(id: number): Promise<Article> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.articlesUrl}/${id}`, { headers })
      .toPromise()
      .then(response => {
        const article = response as Article;

        return article;
      });
  }

}
