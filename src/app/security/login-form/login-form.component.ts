import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(
    private authService: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router) { }

  login(user: string, password: string) {
    this.authService.login(user, password).then(() => {
      this.router.navigate(['/home']);
    }).catch(error => {
      this.errorHandler.handle(error);
    });
  }

}
