import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TlcHttp } from '../security/tlc-http.service';
import { DevProject } from '../core/models';
import { AppLanguage } from '../app.language';

@Injectable({
  providedIn: 'root'
})
export class DevProjectService {
 
  language = AppLanguage.getLanguage();
  projectsUrl = `${environment.apiUrl}/devprojects?language=${this.language}`;

  constructor(private http: TlcHttp, private httpClient: HttpClient) { }

  listAll(): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    return this.httpClient.get(this.projectsUrl, { headers }).toPromise();
  }

  delete(codigo: number): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    return this.http.delete(`${this.projectsUrl}/${codigo}`, { headers }).toPromise();
  }

  create(project: DevProject): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=')
      .append('Content-Type', 'application/json');

    return this.http.post(this.projectsUrl,
        JSON.stringify(project), { headers })
      .toPromise();
  }

  update(project: DevProject): Promise<DevProject> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=')
      .append('Content-Type', 'application/json');

    return this.http.put(`${this.projectsUrl}/${project.id}`,
        JSON.stringify(project), { headers })
      .toPromise()
      .then(response => {
        const changedProject = response as DevProject;

        return changedProject;
      });
  }

  getById(id: number): Promise<DevProject> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.httpClient.get(`${this.projectsUrl}/${id}`, { headers })
      .toPromise()
      .then(response => {

        const project = response as DevProject;

        return project;
      });
  }
}
