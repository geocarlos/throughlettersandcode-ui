import { Component, OnInit, ErrorHandler } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';
import { LogoutService } from 'src/app/security/logout.service';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../error-handler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private logoutService: LogoutService,
    private router: Router,
    private errorHandler: ErrorHandlerService) { }

  logout() {
    this.logoutService.logout().then(() => {
      this.router.navigate(['/login']);
    })
    .catch(error => this.errorHandler.handle(error));
  }

  ngOnInit() {
    console.log('Auth: ', this.auth.hasAnyAuthority(['ROLE_READ_ARTICLE']));
  }

}
