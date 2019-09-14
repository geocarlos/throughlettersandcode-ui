import { Injectable } from '@angular/core';
import { TlcHttp } from '../security/tlc-http.service';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../core/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryUrl: string;

  constructor(
    private http: TlcHttp,
    private errorHandler: ErrorHandlerService) {
    this.categoryUrl = `${environment.apiUrl}/categories`;
  }

  listAll(): Promise<any> {

    return this.http.get<any>(this.categoryUrl).toPromise();
  }

  add(category: any) {
    return this.http.post<any>(this.categoryUrl, category).toPromise()
      .then(response => console.log(response))
      .catch(error => this.errorHandler.handle(error));
  }
}
