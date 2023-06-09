import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  constructor() { }
  
 
  details:any={};
  finalData:any = [];
  public Uservalue(userdetails:any){
    this.details = userdetails;
    this.finalData.push(this.details);  
  }

/*
  addData(){
    this.finalData.push(this.details);
    return this.finalData;
  }
*/
  
}

/*
export class UserdataService {

  constructor() { }
  form_data:any={}; // data of that form which submitted recently

  finalData : any[] =[]; // combined data of all the forms that have been submitted

  // Passing data to the service from modal component
  public loginUser(userdata:any){
    this.form_data = userdata;
    this.finalData.push(this.form_data);  
  }
}





*/
