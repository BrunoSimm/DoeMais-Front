import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterByName } from './filter-by-name.pipe';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

import { RouterModule } from '@angular/router';
import { NecessidadeModule } from '../necessidade/necessidade.module';
import { NecessidadeListComponent } from './necessidade-list.component';
import { NecessidadesComponent } from './necessidades/necessidades.component';
import { LoadButtonComponentNecessidade } from './load-button/load-button.component';

@NgModule({
  declarations: [
    NecessidadeListComponent,
    NecessidadesComponent,
    LoadButtonComponentNecessidade,
    FilterByName,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NecessidadeModule,
    CardModule,
    DarkOnHoverModule,
  ]
})
export class NecessidadeListModule { }
