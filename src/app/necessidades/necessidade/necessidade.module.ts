import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NecessidadeComponent } from './necessidade.component';

@NgModule({
  declarations: [
    NecessidadeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [NecessidadeComponent]
})
export class NecessidadeModule { }
