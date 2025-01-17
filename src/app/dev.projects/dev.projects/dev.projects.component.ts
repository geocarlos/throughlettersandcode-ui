import { Component, OnInit } from '@angular/core';
import { DevProjectService } from '../dev.project.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/security/auth.service';
import { getPreview } from 'src/app/core/helpers';

@Component({
  selector: 'app-dev-projects',
  templateUrl: './dev.projects.component.html',
  styleUrls: ['./dev.projects.component.scss']
})
export class DevProjectsComponent implements OnInit {

  devProjects: any = [];

  getPreview = getPreview;

  isRequestCompleted = false;

  constructor(
    private devProjectService: DevProjectService,
    public auth: AuthService,
    private errorHandler: ErrorHandlerService) { }

  get noProjects(): boolean {
    return this.devProjects.length < 1 && this.isRequestCompleted;
  }

  get isLoading(): boolean {
    return !this.isRequestCompleted;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.devProjectService.listAll()
    .then(response => {this.devProjects = response.content.reverse(); })
    .catch(error => this.errorHandler.handle(error))
    .finally(() => {
      this.isRequestCompleted = true;
    });
  }

}
