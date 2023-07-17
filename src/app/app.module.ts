import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Employee1Component } from './employee1/employee1.component';
import { HttpClientModule } from '@angular/common/http';
//import { ViewComponent } from './view/view.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './update/update.component';
//import { View1Component } from './view1/view1.component';
import { HomeComponent } from './home/home.component';
import { DeleteComponent } from './delete/delete.component';
import { NgIf } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    Employee1Component,
    
    EmployeeComponent,
    UpdateComponent,
    
    HomeComponent,
   DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgIf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
