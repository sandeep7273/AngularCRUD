import { Component, OnInit } from '@angular/core';
import { Employee } from '../user.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
EmployeeModel : Employee = new Employee();
newEmployeeClicked = false;
  constructor( private service : DataService) { }

  ngOnInit() {
  }
  addEmployee() {
    // this.formService.addUser(this.UserModel);
    this.service.addRecord(this.EmployeeModel)
    this.EmployeeModel = new Employee();
    
  }
  addNewEmployeeBtn() {
    this.newEmployeeClicked = !this.newEmployeeClicked;
  }


}
