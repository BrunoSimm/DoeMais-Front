import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { DashboardDoadorComponent } from './dashboard/dashboard-doador/dashboard-doador.component';
import { DashboardOngComponent } from './dashboard/dashboard-ong/dashboard-ong.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardResolver } from './dashboard/dashboard.resolver';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { AddItemComponent } from './itens/add-item/add-item.component';
import { ItemListComponent } from './itens/item-list/item-list.component';
import { ItemListResolver } from './itens/item-list/item-list.resolver';
import { AddNecessidadeComponent } from './necessidades/add-necessidade/add-necessidade.component';
import { NecessidadeListComponent } from './necessidades/necessidade-list/necessidade-list.component';
import { NecessidadeListResolver } from './necessidades/necessidade-list/necessidade-list.resolver';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { 
        path: '', 
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      }
    ]
  },
  {
    path: 'dashboard/doador',
    //canActivate: [AuthGuard],
    //component: DashboardDoadorComponent, 
    component: NotFoundComponent,
    resolve: {
      user: DashboardResolver
    }
  },
  {
    path: 'dashboard/ong',
    component: DashboardOngComponent, 
    resolve: {
      user: DashboardResolver
    }
  },
  {
    path: 'itens',
    component: ItemListComponent, 
    resolve: {
      itens: ItemListResolver //Descomentar depois que endpoint disponível.
    }
  },
  {
    path: 'itens/add',
    component: AddItemComponent, 
  },
  {
    path: 'necessidades',
    component: NecessidadeListComponent, 
    resolve: {
      necessidades: NecessidadeListResolver //Descomentar depois que endpoint disponível.
    }
  },
  {
    path: 'necessidades/add',
    component: AddNecessidadeComponent, 
  },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
