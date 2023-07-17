import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './update/update.component';
//import { View1Component } from './view1/view1.component';
import { Employee1Component } from './employee1/employee1.component';
import { HomeComponent } from './home/home.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  
  {
    path: 'employee1',
    component: Employee1Component
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'delete',
    component:DeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
