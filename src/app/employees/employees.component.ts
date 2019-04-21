import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],

})
export class EmployeesComponent {
  employees ;
  url = 'http://dummy.restapiexample.com/api/v1/employees';
  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe(response => {
       this.employees = response;  
    })
  }



}
