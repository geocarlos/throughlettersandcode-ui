import { Component, OnInit, OnDestroy, ɵLOCALE_DATA } from '@angular/core';
import { AppLanguage } from 'src/app/app.language';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  language = AppLanguage.getLanguage();

  animClass = 'fadeInAnim';

  sections: any = [
    {
      title: { en: 'English-Portuguese Translation', pt: 'Tradução de inglês' },
      subtitle: {
        en: 'Over 10 years of experience as a technical translator',
        pt: 'Mais de 10 anos de experiência com tradução técnica'
      }
    },
    {
      title: { en: 'Software Translation', pt: 'Tradução de Software' },
      subtitle: {
        en: 'Hundreds of apps translated from all over the world',
        pt: 'Tradução de centenas de aplicativos de diversos países'
      }
    },
    {
      title: { en: 'Backend Development with JavaScript', pt: 'Desenvolvimento Backend com JavaScript' },
      subtitle: {
        en: 'RESTful API development with Node and Express',
        pt: 'Desenvolvimento de API REST com Node e Express'
      }
    },
    {
      title: { en: 'Backend Development with Java', pt: 'Desenvolvimento Backend com Java' },
      subtitle: {
        en: 'RESTful API development with Java and Spring',
        pt: 'Desenvolvimento de API REST com Java e Spring'
      }
    },
    {
      title: { en: 'Frontend Development', pt: 'Desenvolvimento Frontend' },
      subtitle: {
        en: 'Single page application development with Angular and React',
        pt: 'Desenvolvimento de SPA (single page application) com Angular e React'
      }
    }
  ];

  activeSections = [];
  tracker = 0;
  interval: any;

  constructor() {
    console.log(this.language);
  }

  playSections: any = () => {
    const self = this;

    for (const section of this.sections) {
      self.activeSections.push({
        title: section.title[self.language],
        subtitle: section.subtitle[self.language],
        animClass: 'outside'
      });
    }

    self.activeSections[0].animClass = 'fadeInAnim';

    this.interval = setInterval(() => {
      self.activeSections[self.tracker].animClass = 'fadeOutAnim';
      self.tracker++;
      if (self.tracker >= self.sections.length) {
        self.tracker = 0;
      }

      self.activeSections[self.tracker].animClass = 'fadeInAnim';

    }, 5000);
  }

  ngOnInit() {
    this.playSections();
    window.scrollTo(0, 0);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
