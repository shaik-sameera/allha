import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  InsertedSuccess,
  EmpDetails,
  UniqueConstraintError,
  Read
} from './emp-details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:3000/';

  Insert(
    Details: EmpDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'Employee/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Delete(emp_code: String): Observable<InsertedSuccess | UniqueConstraintError> {
    console.log(`${this.url}Employee/Delete${emp_code}`);
    return this.http.delete<InsertedSuccess | UniqueConstraintError>(
    `${this.url}Employee/Delete${emp_code}`   
    );
  }
  // Read(Employee: String): Observable<Read> {
  //   return this.http.get<Read>(`${this.url}Employee/Read${Employee}`);
  // }
  Read(emp_code: String): Observable<any> {
    console.log(`${this.url}Employee/Read${emp_code}`);
    return this.http.get<InsertedSuccess>(
    `${this.url}Employee/Read${emp_code}`   
    );
  }
  Update(emp_code: String, Details:EmpDetails):Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.put<InsertedSuccess | UniqueConstraintError>(`${this.url}Employee/Update${emp_code}`, Details, {
      headers: this.headers,
    });
  }
}
