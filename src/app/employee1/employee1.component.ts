
import { Component, OnInit, OnDestroy } from '@angular/core';
import{
  InsertedSuccess,
  EmpDetails,
  UniqueConstraintError,
  Read
} from '../emp-details';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
//import { CrudoperationService } from './crudoperation.service';
import { CRUDService } from '../crudoperation.service';
//import { CurrencyPipe } from '@angular/common';
//import { CRUDService } from '../crudoperation.service';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component implements OnInit, OnDestroy {
  constructor(private Service: CRUDService) { }
  ngOnInit() { }
  canshowData = false;

  Subscription: Subscription = new Subscription();
  a = [];
  SuccessMsg = '';
  ErrorMsg = '';
 Read(emp_code:string)
 {
  this.SuccessMsg = '';
  this.ErrorMsg = '';
  this.Subscription=this.Service.Read(emp_code).subscribe(
    (data)=>
    {
      if(data)
      {
        if(data.Result.length!=0)
      {
        this.ErrorMsg=`The Employee Code ${emp_code} already exists.`
        console.log(data);
      }
      else{
        this.SuccessMsg="welcome";
        this.SuccessMsg="";

        console.log("not exists")
        console.log(data);

        
      }
      }
      else
      {
        console.log("failed");
        console.log(data);

      }
    }
  )
 }
  Insert(Form: NgForm) {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
    alert("successfully inserted");
    this.Subscription = this.Service.Insert(Form.value).subscribe(
      (data: any) => {
        if (data) {
          console.log(data);
         // document.write('Succesfully Updated');

        }
        else {
          console.log("Failed");
        }
      }
    )
    //console.log(Form);
 

    Form.reset();
    this.ErrorMsg="";
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }


}

