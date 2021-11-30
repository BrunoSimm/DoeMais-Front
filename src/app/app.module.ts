import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { ItensModule } from './itens/itens.module';
import { ItemListModule } from './itens/item-list/item-list.module';
import { NecessidadesModule } from './necessidades/necessidades.module';
import { NecessidadeModule } from './necessidades/necessidade/necessidade.module';
import { NecessidadeFormModule } from './necessidades/necessidade-form/necessidade-form.module';
import { NecessidadeListModule } from './necessidades/necessidade-list/necessidade-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ItensModule,
    ErrorsModule,
    HomeModule,
    CoreModule,
    DashboardModule,
    ItensModule,
    ItemListModule,
    NecessidadesModule,
    NecessidadeModule,
    NecessidadeFormModule,
    NecessidadeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
