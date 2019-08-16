import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {

  apps: any = [];

  constructor(private appService: AppService, private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.appService.listAll()
    .then(response => {this.apps = response; console.log(response); })
    .catch(error => this.errorHandler.handle(error));
  }

}
