import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { JwtModule } from '@auth0/angular-jwt';

import { LoginFormComponent } from './login-form/login-form.component';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './auth.guard';
import { LogoutService } from './logout.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: environment.tokenWhitelistedDomains,
        blacklistedRoutes: environment.tokenBlacklistedRoutes
      }
    })
  ],
  providers: [
    AuthGuard,
    LogoutService
  ]
})
export class SecurityModule { }
