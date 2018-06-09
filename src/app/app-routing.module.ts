import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent}
]


@NgModule({
 exports: [
   RouterModule
 ],
 imports: [
   RouterModule.forRoot(routes)
 ],
 declarations: []
})

export class AppRoutingModule { }
