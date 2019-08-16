import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageModule } from '../homepage/homepage.module';
import { AppRoutingModule } from '../app-routing.module';
import { ArticlesModule } from '../articles/articles.module';
import { VideosModule } from '../videos/videos.module';
import { AppsModule } from '../apps/apps.module';
import { SecurityModule } from '../security/security.module';
import { AuthService } from '../security/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ErrorHandlerService } from './error-handler.service';
import { ToastyModule } from 'ng2-toasty';
import { TlcHttp } from '../security/tlc-http.service';
import { NotAuthorizedComponent } from './not-authorized.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleFilter } from '../articles/article.service';
import { CategoriesModule } from '../categories/categories.module';
import { VideoFilter } from '../videos/video.service';

@NgModule({
  declarations: [NavbarComponent, NotAuthorizedComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HomepageModule,
    ArticlesModule,
    VideosModule,
    CategoriesModule,
    AppsModule,
    SecurityModule,
    HttpClientModule,
    ToastyModule.forRoot()
  ],
  exports: [
    NavbarComponent,
    ToastyModule
  ],
  providers: [
    AuthService,
    JwtHelperService,
    ErrorHandlerService,
    TlcHttp,
    ArticleFilter,
    VideoFilter,

    JwtHelperService
  ]
})
export class CoreModule { }
