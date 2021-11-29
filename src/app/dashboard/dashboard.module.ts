import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from '../shared/components/card/card.module';
import { DashboardOngComponent } from './dashboard-ong/dashboard-ong.component';
import { DashboardDoadorComponent } from './dashboard-doador/dashboard-doador.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardOngComponent,
    DashboardDoadorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    VmessageModule,
    CardModule
  ],
})
export class DashboardModule { }
