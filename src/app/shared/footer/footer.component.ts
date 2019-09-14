import { Component, OnInit } from '@angular/core';
import { AppLanguage } from 'src/app/app.language';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  language = AppLanguage.getLanguage();

  languageNote = this.language === 'pt' ? 'View in English' : 'Ver em português';

  constructor() { }

  changeLanguage() {
    const pathName = window.location.pathname;
    if (this.language === 'pt') {
      window.location.href = window.location.href.replace('br/', '');
    } else {
      window.location.href = window.location.href.replace(pathName, '/br' + pathName);
    }
  }

  goToTop(): void {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

}
