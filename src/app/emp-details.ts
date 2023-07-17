export interface EmpDetails {
    emp_code: String;
    emp_name: String;
    emp_qual: string;
    emp_join_date: Date
    emp_resignation_date: Date;
    emp_pan_no:string;
    emp_adhar_no:number;
    emp_pf_flag:string;
    emp_pf_no:string;
    emp_esi_no:number;
    emp_esi_flag:string;
    emp_catg:string;
    emp_basic:number
    emp_dept:string;
    emp_hno:string;
    emp_street:string;
    emp_city:string;
    emp_pincode:number;
    emp_state:string;
    emp_phno:number;
    emp_email_id:string;
    emp_cons_reg_flag:string;
    emp_spl_pay:number;
    emp_bank_ifsc:string;
    emp_bank_name:string;
    emp_bank_acno:string;
  }
export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
    Message:string;
  }
export interface Read {
      Result: [];
  }