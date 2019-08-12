import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { AppsComponent } from './apps/apps/apps.component';
import { VideosComponent } from './videos/videos/videos.component';
import { AboutComponent } from './homepage/about/about.component';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { NotAuthorizedComponent } from './core/not-authorized.component';
import { AuthGuard } from './security/auth.guard';
import { CreateArticleComponent } from './articles/create-article/create-article.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'articles', component: ArticlesComponent, canActivate: [AuthGuard], data: ['ROLE_READ_ARTICLE'] },
  { path: 'apps', component: AppsComponent },
  { path: 'videos', component: VideosComponent, canActivate: [AuthGuard], data: ['ROLE_READ_VIDEO'] },
  { path: 'login', component: LoginFormComponent },
  { path: 'create-article', component: CreateArticleComponent },
  { path: 'not-authorized', component: NotAuthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
