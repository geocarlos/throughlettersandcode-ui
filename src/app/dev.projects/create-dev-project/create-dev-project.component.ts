import { Component, OnInit } from '@angular/core';
import { DevProject } from 'src/app/core/models';
import { DevProjectService } from '../dev.project.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-dev-project.component.html',
  styleUrls: ['./create-dev-project.component.scss']
})
export class CreateDevProjectComponent implements OnInit {

  isNewCategoryFormShown = false;

  project = new DevProject();

  categories = [];

  constructor(
    private projectService: DevProjectService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService) { }

  get isEditing() {
    return Boolean(this.route.snapshot.params.id);
  }

  showNewCategoryForm() {
    this.isNewCategoryFormShown = !this.isNewCategoryFormShown;
  }

  saveProject(form: FormControl) {
    if (this.isEditing) {
      this.updateProject();
    } else {
      this.createProject();
    }
  }

  updateProject(): void {
    this.projectService.update(this.project)
    .then(() => alert('Project updated.'))
    .catch(error => this.errorHandler.handle(error));
  }

  createProject() {
    this.project.createdDate = new Date();
    this.project.author.id = 1;
    console.log(this.project);
    this.projectService.create(this.project)
    .then(() => alert('Project created.'))
    .catch(error => this.errorHandler.handle(error));
  }

  ngOnInit(): void {
    if (this.isEditing) {
      this.projectService.getById(this.route.snapshot.params.id)
      .then(response => this.project = response)
      .catch(error => this.errorHandler.handle(error));
    }
    this.project.language = 'en';
  }

}
