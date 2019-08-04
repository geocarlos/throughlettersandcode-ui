import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryUrl = 'http://localhost:8080/categories';

  constructor(private http: HttpClient) { }

  listarTodas(): Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(this.categoryUrl, { headers }).toPromise();
  }
}
