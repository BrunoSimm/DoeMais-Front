import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ItemComponent]
})
export class ItemModule { }
