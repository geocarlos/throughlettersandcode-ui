import { Component, OnInit } from '@angular/core';
import { DevProjectService } from '../dev.project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DevProject } from 'src/app/core/models';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './dev-project.component.html',
  styleUrls: ['./dev-project.component.scss']
})
export class DevProjectComponent implements OnInit {

  project: DevProject;
  language: string;

  constructor(
    private projectService: DevProjectService,
    public auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private errorHandler: ErrorHandlerService) { }

  deleteProject(id: number) {
    this.projectService.delete(id)
    .then(() => {
      window.alert('Project has been deleted.');
      this.router.navigateByUrl('/projects');
    })
    .catch(error => this.errorHandler.handle(error));
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.projectService.getById(this.route.snapshot.params.id)
    .then(response => this.project = response)
    .catch(error => this.errorHandler.handle(error));
  }

}
