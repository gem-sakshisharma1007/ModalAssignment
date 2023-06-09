import { Component, Input, OnInit} from '@angular/core';
import { UsersDataService } from 'src/app/users-data.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-comp',
  templateUrl: './modal-comp.component.html',
  styleUrls: ['./modal-comp.component.css']
})
export class ModalCompComponent implements OnInit {
selectedOrderIds:any=[];
userForm: any;
technologies: string[] = ['C', 'C++', 'Java', 'Python', 'JavaScript'];
selectedFile: string | null = null;

route: any;
modalService: any;
  constructor(public activeModal: NgbActiveModal, public router: Router,private userdetails: UsersDataService,) {

  }
  ngOnInit(): void {
    this.technologies.forEach(() => (this.userForm.get('technology') as FormArray).push(new FormControl(false)));
  }

  getControls(){
  
    return (this.userForm.get('technology') as FormArray).controls
  }
  /*
  userData:any;
    saveData() {
    this.selectedOrderIds = this.userForm.value.technology
    .map((checked: any, i: any) => checked ? this.technologies[i] : null)
    .filter((v:string) => v !== null);
    console.log(this.selectedOrderIds);
    this.userData = this.userForm.value;
    this.userData = this.selectedOrderIds;
    this.userData = this.selectedFile;
    console.log(this.userData);
    this.userService.details = this.userData;
    this.route.navigate(['/users/view']);
    this.activeModal.dismiss('Cross click');

  }*/
  saveData() {
    this.userdetails.Uservalue(this.data);
    this.router.navigate(['./users/view']); // After click on save button, it get redirect to view component
    this.activeModal.dismiss('Cross click'); // To dismiss that modal 
  }

  @Input() data: any;

 


}


