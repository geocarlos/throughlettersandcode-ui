import { Component, ɵLOCALE_DATA } from '@angular/core';
import { ToastyConfig } from 'ng2-toasty';
import { AppLanguage } from './app.language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'bootstrap';
    AppLanguage.setLanguage(Object.keys(ɵLOCALE_DATA)[0] || 'en');
  }
}
