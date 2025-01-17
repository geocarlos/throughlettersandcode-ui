import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ CreateCategoryComponent ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ CreateCategoryComponent ]
})
export class CategoriesModule { }
