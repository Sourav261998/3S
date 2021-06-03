import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { DashboardComponent  } from  './dashboard/dashboard.component';
import {LoginComponent } from './login/login.component';
import { HomeComponent} from './home/home.component';
import { AddDetailsComponent} from './add-details/add-details.component';
import {NavbarComponent} from './navbar/navbar.component';
import {DetailsComponent} from './details/details.component';


//import {ServerComponent } from './server/server.component';
//import {AuthGuard} from './services/authentication';

const routes: Routes = [
 // {path: 'dashboard', component:DashboardComponent },// canActivate: [AuthGuard]},
  {path:'login',component: LoginComponent},
  {path: 'home',component:  HomeComponent},
  {path: 'navbar',component: NavbarComponent},
  {path:'add-details',component: AddDetailsComponent},
  {path:'details',component:DetailsComponent },
  {path: '**', redirectTo: 'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
