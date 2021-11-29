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
import { ItemListComponent } from './itens/item-list/item-list.component';
import { ItemListResolver } from './itens/item-list/item-list.resolver';


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
  /*{ 
    path: 'user/:userName', 
    component: PhotoListComponent, 
    resolve: {
      photos: PhotoListResolver
    }
  },*/
  {
    path: 'dashboard/doador',
    //canActivate: [AuthGuard],
    component: DashboardDoadorComponent, 
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
      //itens: ItemListResolver //Descomentar depois que endpoint disponível.
    }
  },
  //{ path: 'p/add', component: PhotoFormComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
