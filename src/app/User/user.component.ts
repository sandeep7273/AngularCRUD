import { Component, OnInit} from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { Employee } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  records;

  constructor(
    private service: DataService, private _router: Router) { }

  ngOnInit() {

    this.records = this.service.getRecords();
  }

  model2: Employee = new Employee(); 

  deleteEmployee(i) {
    this.service.delete(i)
    console.log(i);
  }

  myValue;

  editEmployee(editEmployeeInfo) {
    this.model2.name = this.records[editEmployeeInfo].name;
    this.model2.contact = this.records[editEmployeeInfo].contact;
    this.model2.email = this.records[editEmployeeInfo].email;
    this.model2.position = this.records[editEmployeeInfo].position;
    this.model2.address = this.records[editEmployeeInfo].address;
    this.myValue = editEmployeeInfo;
    this.service.addToUpdate(this.model2);
    this.service.delete(editEmployeeInfo);
    this._router.navigate(['/edit'])


  }

 
}