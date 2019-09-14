import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { TlcHttp } from './tlc-http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  tokensRevokeUrl = `${environment.apiUrl}/tokens/revoke`;

  constructor(private http: TlcHttp, private auth: AuthService) { }

  logout() {
    return this.http.delete(this.tokensRevokeUrl, {withCredentials: true})
    .toPromise()
    .then(() => {
      this.auth.clearAccessToken();
    });
  }
}
