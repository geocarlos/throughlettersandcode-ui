import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  sections: any = [
    { title: 'English-Portuguese Translation', subtitle: 'Over 10 years of experience as a technical translator' },
    { title: 'English-Portuguese Translation', subtitle: 'Hundreds of apps translated from all over the world' },
    { title: 'Software Development', subtitle: 'RESTful API development with Node and Express' },
    { title: 'Software Development', subtitle: 'RESTful API development with Java and Spring' },
    { title: 'Software Development', subtitle: 'Front-end development with Angular' },
    { title: 'Software Development', subtitle: 'Front-end development with React' }
  ];

  activeSection: any = { title: 'English-Portuguese Translation', subtitle: 'Over 10 years of experience as a technical translator' };
  tracker = 0;
  interval: any;

  playSections: any = () => {
    const self = this;
    this.interval = setInterval(() => {
      self.tracker++;
      if (self.tracker >= self.sections.length) {
        self.tracker = 0;
      }
      self.activeSection = self.sections[self.tracker];
    }, 2000);
  }

  ngOnInit() {
    this.playSections();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
