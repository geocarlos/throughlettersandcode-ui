import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageModule } from '../homepage/homepage.module';
import { AppRoutingModule } from '../app-routing.module';
import { ArticlesModule } from '../articles/articles.module';
import { VideosModule } from '../videos/videos.module';
import { AppsModule } from '../apps/apps.module';
import { SecurityModule } from '../security/security.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HomepageModule,
    ArticlesModule,
    VideosModule,
    AppsModule,
    SecurityModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
