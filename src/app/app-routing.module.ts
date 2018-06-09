import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path: '', component: DashboardComponent}
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
