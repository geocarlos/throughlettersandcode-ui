import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../category.service';

class Category {
  name: string;
}

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent {

  category = new Category();

  @Input() isNewCategoryFormShown: boolean;
  @Output() isNewCategoryFormShownChange = new EventEmitter();

  constructor(private categoryService: CategoryService) { }

  addCategory(e: any) {
    e.preventDefault();
    if (e.target.value === '') { return; }
    this.categoryService.add(this.category);
    this.category.name = '';
  }

  close(e: any) {
    e.preventDefault();
    this.isNewCategoryFormShown = false;
    this.isNewCategoryFormShownChange.emit(this.isNewCategoryFormShown);
  }

}
