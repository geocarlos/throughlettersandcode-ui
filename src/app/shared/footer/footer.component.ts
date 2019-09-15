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
    const location = window.location;
    if (this.language === 'pt') {
      location.href = location.href.replace('br/', '');
    } else {
      location.href = `${location.origin}/br${location.pathname}`;
    }
  }

  goToTop(): void {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

}
