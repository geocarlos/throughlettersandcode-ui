import { Component, OnInit } from '@angular/core';
import { Video, Category } from 'src/app/core/models';
import { VideoService } from '../video.service';
import { CategoryService } from 'src/app/categories/category.service';
import { FormControl } from '@angular/forms';

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
    private categoryService: CategoryService) { }

  showNewCategoryForm() {
    this.isNewCategoryFormShown = !this.isNewCategoryFormShown;
  }

  createVideo(form: FormControl) {
    this.video.createdDate = new Date();
    this.video.author.id = 1;
    console.log(this.video);
    this.videoService.create(this.video);

  }

  getCategories() {
    this.categoryService.listAll()
      .then(response => this.categories = response)
      .catch(error => console.log(error));

  }

  ngOnInit(): void {
    this.getCategories();
    this.video.language = 'en';
    this.video.category.id = 1;
  }

}
