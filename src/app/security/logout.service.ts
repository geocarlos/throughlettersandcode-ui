import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { TlcHttp } from './tlc-http.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  tokensRevokeUrl = 'http://localhost:8080/tokens/revoke';

  constructor(private http: TlcHttp, private auth: AuthService) { }

  logout() {
    return this.http.delete(this.tokensRevokeUrl, {withCredentials: true})
    .toPromise()
    .then(() => {
      this.auth.clearAccessToken();
    });
  }
}
