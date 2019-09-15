import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppLanguage } from 'src/app/app.language';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  language = AppLanguage.getLanguage();

  constructor(public sanitizer: DomSanitizer) { }

  get videoId(): string {
    console.log(this.language);
    return this.language === 'en' ? '50280kjWeLQ' : 'V9y0ZbR3Yxc';
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
