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
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit,OnDestroy {
  constructor(private Service: CRUDService) {}
  ngOnInit() {}
  canshowData = false;
  subscription1: Subscription = new Subscription();
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
  
           Read() 
           {
            this.ErrorMsg = '';
            this.SuccessMsg = '';
            this.subscription1 = this.Service.Read(this.User.emp_code).subscribe(
              (data:any)=>{
                   if(data){
                       console.log(data);
                       //document.write('Succesfully read');
                       //console.log(data);
                       //document.write('Succesfully deleted');
                       console.log(data.Result)
                      this.a=data.Result[0]; 
                      this.User= {
                        emp_code:this.a[0],
                        emp_name: this.a[1],
                        emp_qual:this.a[2],
                        emp_join_date:this.a[3],
                        emp_resignation_date:this.a[4],
                        emp_pan_no:this.a[5],
                        emp_adhar_no:this.a[6],
                        emp_pf_flag:this.a[7],
                        emp_pf_no:this.a[8],
                        emp_esi_no:this.a[9],
                        emp_esi_flag:this.a[10],
                        emp_catg:this.a[11],
                        emp_basic:this.a[12],
                        emp_dept:this.a[13],
                        emp_hno:this.a[14],
                        emp_street:this.a[15],
                        emp_city:this.a[16],
                        emp_pincode:this.a[17],
                        emp_state:this.a[18],
                        emp_phno:this.a[19],
                        emp_email_id:this.a[20],
                        emp_cons_reg_flag:this.a[21],
                        emp_spl_pay:this.a[22],
                        emp_bank_ifsc:this.a[23],
                        emp_bank_name:this.a[24],
                        emp_bank_acno:this.a[25]
                      };
                      console.log(this.a);
                      this.canshowData=true;
                       
                   }
                     else{
                       console.log("Failed");
                     }
                   }
                 )
               }
               
    ngOnDestroy() {
        this.subscription1.unsubscribe();
     }

}


