import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByName } from './filter-by-name.pipe';
import { ItemModule } from '../item/item.module'; 
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';
import { ItensComponent } from './itens/itens.component';
import { ItemListComponent } from './item-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ItemListComponent,
    ItensComponent,
    LoadButtonComponent,
    FilterByName,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ItemModule,
    CardModule,
    DarkOnHoverModule,
  ]
})
export class ItemListModule { }
