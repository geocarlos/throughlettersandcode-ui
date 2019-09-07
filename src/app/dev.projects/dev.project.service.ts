import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevProjectService {

  appsUrl = `${environment.apiUrl}/devprojects`;

  constructor(private httpClient: HttpClient) { }

  listAll(): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    return this.httpClient.get(this.appsUrl, { headers }).toPromise();
  }
}
