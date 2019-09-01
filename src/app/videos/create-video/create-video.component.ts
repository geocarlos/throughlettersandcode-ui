import { Component, OnInit } from '@angular/core';
import { Video, Category } from 'src/app/core/models';
import { VideoService } from '../video.service';
import { CategoryService } from 'src/app/categories/category.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-create-video',
  templateUrl: './create-video.component.html',
  styleUrls: ['./create-video.component.scss']
})
export class CreateVideoComponent implements OnInit {

  isNewCategoryFormShown = false;

  video = new Video();

  categories = [];

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService,
    private categoryService: CategoryService) { }

  get isEditing() {
    return Boolean(this.route.snapshot.params.id);
  }

  showNewCategoryForm() {
    this.isNewCategoryFormShown = !this.isNewCategoryFormShown;
  }

  saveVideo(form: FormControl) {
    if (this.isEditing) {
      this.updateVideo();
    } else {
      this.createVideo();
    }
  }

  updateVideo(): void {
    this.videoService.update(this.video)
    .then(() => alert('Video updated.'))
    .catch(error => this.errorHandler.handle(error));
  }

  createVideo() {
    this.video.createdDate = new Date();
    this.video.author.id = 1;
    console.log(this.video);
    this.videoService.create(this.video)
    .then(() => alert('Video created.'))
    .catch(error => this.errorHandler.handle(error));
  }

  getCategories() {
    this.categoryService.listAll()
      .then(response => this.categories = response)
      .catch(error => console.log(error));

  }

  ngOnInit(): void {
    this.getCategories();
    if (this.isEditing) {
      this.videoService.getById(this.route.snapshot.params.id)
      .then(response => this.video = response)
      .catch(error => this.errorHandler.handle(error));
    }
    this.video.language = 'en';
    this.video.category.id = 1;
  }

}
