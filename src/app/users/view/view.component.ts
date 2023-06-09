import { Component } from '@angular/core';
import { UsersDataService } from 'src/app/users-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private userservice: UsersDataService){
    if(this.userservice.details !== undefined)
    this.userdetails = userservice.finalData;
    console.log(this.userdetails)
  }
  userdetails:any;
  


  

  
}

