import { Component, OnInit } from '@angular/core';
import { DevProjectService } from '../dev.project.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-dev-projects',
  templateUrl: './dev.projects.component.html',
  styleUrls: ['./dev.projects.component.scss']
})
export class DevProjectsComponent implements OnInit {

  devProjects: any = [];

  constructor(private devProjectService: DevProjectService, private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.devProjectService.listAll()
    .then(response => {this.devProjects = response; console.log(response); })
    .catch(error => this.errorHandler.handle(error));
  }

}
