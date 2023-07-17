
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  InsertedSuccess,
  EmpDetails,
  UniqueConstraintError
} from '../emp-details';
import { Subscription } from 'rxjs';
//import { CrudoperationService } from './crudoperation.service';
import { CRUDService } from '../crudoperation.service';
//import { CurrencyPipe } from '@angular/common';
//import { CRUDService } from '../crudoperation.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit,OnDestroy {
  constructor(private Service: CRUDService) {}
  ngOnInit() {}

  Subscription: Subscription = new Subscription();
  User: EmpDetails= {
    emp_code: '',
    emp_name: '',
    emp_qual: '',
    emp_join_date:new Date(),
    emp_resignation_date:new Date(),
    emp_pan_no:'',
    emp_adhar_no:0,
    emp_pf_flag:'',
    emp_pf_no:'',
    emp_esi_no:0,
    emp_esi_flag:'',
    emp_catg:'',
    emp_basic:0,
    emp_dept:'',
    emp_hno:'',
    emp_street:'',
    emp_city:'',
    emp_pincode:0,
    emp_state:'',
    emp_phno:0,
    emp_email_id:'',
    emp_cons_reg_flag:'',
    emp_spl_pay:0,
    emp_bank_ifsc:'',
    emp_bank_name:'',
    emp_bank_acno:''
  };
  a=[];
  SuccessMsg = '';
  ErrorMsg = '';
 
       Delete() {
        this.ErrorMsg = '';
        this.SuccessMsg = '';
        alert("delete successfully");
        this.Subscription = this.Service.Delete(this.User.emp_code).subscribe(
          (data:any)=>{
               if(data){
                   console.log(data);
                   //document.write('Succesfully deleted');
                                    
               }
                 else{
                   console.log("Failed");
                 }
               }
             )
           }
           
       ngOnDestroy() {
        this.Subscription.unsubscribe();
      }
  

}

