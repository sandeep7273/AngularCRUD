import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  EmployeesRecord =[];
  valueToUpdate = []
  constructor() { }

  addRecord(EmployeeModel){
    this.EmployeesRecord.push(EmployeeModel);
    console.log(this.EmployeesRecord);
  }
  getRecords(){
    return this.EmployeesRecord;
  }
  delete(i){
    this.EmployeesRecord.splice(i,1);
    return this.EmployeesRecord;
  }
  addToUpdate(myValue){
    this.valueToUpdate.push(myValue);
    
  }
  getToUpdate(){
    return this.valueToUpdate;
  }
}
