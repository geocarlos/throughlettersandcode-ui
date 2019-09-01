import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Video } from '../core/models';
import { TlcHttp } from '../security/tlc-http.service';
import { AppLanguage } from '../app.language';

export class VideoFilter {
  title: string;
  description: string;
  youtubeId: string;
  createdDate: Date;
  page: 0;
  itemsPerPage: 10;
}


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  language = AppLanguage.getLanguage();
  videosUrl = `${environment.apiUrl}/videos`;

  constructor(private http: TlcHttp, private httpClient: HttpClient) {
  }

  get(filter: VideoFilter): Promise<any> {

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    const params = new HttpParams()
      .set('page', filter.page.toString())
      .set('size', filter.itemsPerPage.toString());

    return this.httpClient.get(`${this.videosUrl}?language=${this.language}`, { headers, params }).toPromise();
  }

  delete(codigo: number): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=');
    return this.http.delete(`${this.videosUrl}/${codigo}`, { headers }).toPromise();
  }

  create(video: Video): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=')
      .append('Content-Type', 'application/json');

    return this.http.post(this.videosUrl,
        JSON.stringify(video), { headers })
      .toPromise();
  }

  update(video: Video): Promise<Video> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=')
      .append('Content-Type', 'application/json');

    return this.http.put(`${this.videosUrl}/${video.id}`,
        JSON.stringify(video), { headers })
      .toPromise()
      .then(response => {
        const changedVideo = response as Video;

        return changedVideo;
      });
  }

  getById(id: number): Promise<Video> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW46YWRtaW4=');

    return this.http.get(`${this.videosUrl}/${id}`, { headers })
      .toPromise()
      .then(response => {
        const article = response as Video;

        return article;
      });
  }
}
